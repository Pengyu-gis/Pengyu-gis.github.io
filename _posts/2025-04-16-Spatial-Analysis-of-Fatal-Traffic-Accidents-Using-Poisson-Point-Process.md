---
tags: Point-process Geospatial-statistics Geospatial-analysis Transportation Public-safety
---

*With **Xiuchuan Liu** and **Xunan Yang**, two talented Ph.D. students in statistics at the University of South Carolina.*

## 1. Dataset and data preprocess

### (1) Data from SCDOT(South Carolina Department of Transportation)
- Road shapefile (including highway, interstates, etc)
- Traffic count (Average Daily Traffic)
- Link: https://info2.scdot.org/GISMapping/Pages/GIS.aspx

<p align="center">
  <img src="https://github.com/user-attachments/assets/be8ec045-90d3-4951-91b9-30d7250328ac" alt="Different types of Roads" style="width:75%;">
</p>

### (2) Data from SCDPS (South Carolina Department of Public Safety)
- Traffic accidents data
- Fatal traffic accidents data
- Link: https://scdps-gis-and-mapping-scdps.hub.arcgis.com/search?collection=Dataset

<p align="center">
  <img src="https://github.com/user-attachments/assets/4c829080-d252-4433-a8b5-975f92f72834" alt="points" style="width:75%;">
</p>


### (3) DEM Data from USGS
Download link: https://apps.nationalmap.gov/downloader/

<p align="center">
  <img src="https://github.com/user-attachments/assets/762e78c7-0859-46ea-9a36-ac69e555740f" alt="DEM" style="width:75%;">
</p>

### (4) Slope and Curvature calculation
(1) Slope: We calculate slope using ArcGIS, the ArcGIS document Link: https://pro.arcgis.com/en/pro-app/latest/tool-reference/spatial-analyst/how-slope-works.htm <br>
(2) Curvature: 
The curvature of a road is quantified using the **radius of a circle** that passes through **three consecutive points** along the road. This radius is also called the **radius of curvature**. Smaller radii indicate sharper turns; larger radii indicate straighter segments.
<p align="center">
<img src="https://github.com/user-attachments/assets/c6575d1f-f867-4cc9-9c35-e4388bdd9e4f" alt=""  style="width:75%;">
</p>

Assume three sequential points on the road:
- $P_1 = (x_1, y_1)$  
- $P_2 = (x_2, y_2)$  
- $P_3 = (x_3, y_3)$
  
We want to find the radius $R$ of the **circumcircle** passing through these three points.

1. Compute the Determinant $D$

This value helps locate the circle's center (circumcenter):

$$
D = 2 \cdot (x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2))
$$

2. Compute Coordinates of Circumcenter $(x_c, y_c)$

These are the coordinates of the center of the circle:

$$
x_c = \frac{(x_1^2 + y_1^2)(y_2 - y_3) + (x_2^2 + y_2^2)(y_3 - y_1) + (x_3^2 + y_3^2)(y_1 - y_2)}{D}
$$

$$
y_c = \frac{(x_1^2 + y_1^2)(x_3 - x_2) + (x_2^2 + y_2^2)(x_1 - x_3) + (x_3^2 + y_3^2)(x_2 - x_1)}{D}
$$

3. Compute the Radius $R$

The radius is the Euclidean distance from the center $(x_c, y_c)$ to any of the three points (e.g., $P_1$):

$$
R = \sqrt{(x_1 - x_c)^2 + (y_1 - y_c)^2}
$$

4. Repeat Along the Line

To compute the curvature along the entire road line:

- Slide a 3-point window along the line.
- Calculate $R$ at each step using the above method.
- Assign $R$ to the middle point.
- Repeat for all points.


## 2. Modeling Framework: Poisson Point Process

In this study, we model the occurrence of fatal road traffic accidents as a **spatial Poisson point process**. This approach treats the observed fatalities as realizations of a stochastic process occurring over a continuous spatial domain (in our case, the road network of South Carolina).

The **log-likelihood** of a nonhomogeneous Poisson point process is given by:

$\log L(\lambda) = \sum_{i=1}^n \log \lambda(x_i) - \int_W \lambda(x) \, dx$


Where:
- $\lambda(x)$: The **intensity function**, representing the expected number of fatal events per unit area (or road length) at location \( x \)
- $x_i$: Coordinates of observed fatal accidents
- $W$: The spatial domain (the road network)

Since the integral $\int_W \lambda(x) dx$ is typically intractable in real-world applications, we approximate it using **Monte Carlo integration** over a set of background (non-fatal) points:

$$
\int_W \lambda(x) dx \approx \sum_{j=1}^m w_j \cdot \lambda(x_j)
$$

Where:
- $x_j$: Sampled background locations
- $w_j$: Weights that represent the area or road segment each background point stands for
- $m$: Total number of background (non-event) points

This transforms the full likelihood into a form that is implementable via **weighted Poisson regression**.

## 3. The Meaning of Weights

In our point process modeling, the **weights** serve to approximate the integral term in the likelihood using a discrete set of non-event (background) points.

- For **fatalities**, we assign:
  $$w_i = 1$$ (It's not a real "weight")

- For **background points**, we assign:
  $$w_j = \frac{A}{m}$$
  Where:
  - $A$: Total length of roads (in 100-meter units)
  - $m$: Number of background points sampled

This weighting ensures that the background points collectively approximate the spatial opportunity for a fatal crash to occur. It is not a sampling weight in the survey sense, but a **numerical approximation of integration**.

Our background points are **non-fatal crash locations** drawn from the same traffic accident dataset, which assumes that the exposure to fatality is proportional to exposure to any crash. Hence, the model estimates the **fatality intensity conditional on crash occurrence**.

## 4. Correlation and Dependence Between Predictors

We evaluated potential multicollinearity among the continuous predictors: **Slope**, **Curvature**, and **AADT (Average Annual Daily Traffic)**.

### Pearson Correlation Matrix



|              | Slope    | Curvature | AADT     |
|--------------|----------|-----------|----------|
| **Slope**    | 1.000000 | -0.107572 | -0.166621 |
| **Curvature**| -0.107572| 1.000000  | 0.044780 |
| **AADT**     | -0.166621| 0.044780  | 1.000000 |




All pairwise correlations are weak (absolute values < 0.2), indicating negligible linear dependence between variables.

### Variance Inflation Factor (VIF)


| Variable   | VIF      |
|------------|----------|
| const      | 8.647327 |
| Slope      | 1.042054 |
| Curvature  | 1.013978 |
| Night      | 1.009383 |
| Surface    | 1.003594 |
| Workzone   | 1.004390 |
| AADT       | 1.037288 |




All VIFs are close to 1.0, well below the standard threshold of 5 or 10 for concern. This confirms that **multicollinearity is not present** in the dataset.

## 5. Covariate Diagnostics via Sliding Window Regression (All Roads)

To investigate whether the effects of continuous covariates remain stable across their ranges, we conducted a **sliding window Poisson regression** for:

- **AADT** (Average Annual Daily Traffic)  
- **Curvature**  
- **Slope**  

Each diagnostic follows these steps:

1. The dataset is **sorted by the covariate** of interest (e.g., AADT, slope), so that similar values are grouped together.
2. A **fixed-size window** (e.g., 200,000 points) is slid along the ordered dataset with a fixed step size (e.g., 5,000 points), generating overlapping subsets of data.
3. In each window, we fit a **Poisson regression model** of the form:
   $$
   \log(\lambda_i) = \beta_0 + \beta_1 x_{i1} + \beta_2 x_{i2} + \cdots + \beta_k x_{ik}
   $$   where:
   - $\lambda_i$ is the expected number of fatalities at observation $i$,
   - $x_{ij}$ are predictor variables (e.g., AADT, slope, curvature),
   - $\beta_j$ are the regression coefficients.
4. From each model, we **extract the coefficient** estimate $\hat{\beta}_j$ associated with the covariate of interest in that window.
5. The resulting sequence of coefficients is **smoothed using LOESS**, and we construct a **95% confidence ribbon** to visualize the local trend and uncertainty.

This approach allows us to assess whether the effect of each covariate is **spatially or contextually stable**, or if it **varies across the dataset**.


### AADT: Effect Weakens at Higher Traffic Volume

<p align="center">
  <img src="https://github.com/user-attachments/assets/b51078b7-280f-44b8-b124-fe228ddb4cd5" alt="AADT Sliding Window" width="700"/>
</p>

> The AADT coefficient is consistently negative, indicating that roads with higher traffic volumes are **less likely to experience fatal crashes**. However, the **magnitude of this negative effect weakens** as traffic increases.


### Curvature: Consistent Mild Risk

<p align="center">
  <img src="https://github.com/user-attachments/assets/bce62c27-3d89-45f1-a579-92d157a4a5e4" alt="Curvature Sliding Window" width="700"/>
</p>

> The curvature coefficient remains negative across all windows, suggesting that **more sharply curved roads are associated with higher fatality risk**. The effect is small but consistent.


### Slope: Increasingly Positive Association

<p align="center">
  <img src="https://github.com/user-attachments/assets/5a79f1f6-6878-47f5-b5e0-84bbfece715d" alt="Slope Sliding Window" width="700"/>
</p>

> The slope effect transitions from negative at low gradients to **increasingly positive at higher slopes**, indicating **elevated fatality risk in steep terrain**.


## 6. Spatial Distribution of Estimated Fatal Crash Intensity $\hat{\lambda}(x)$

<p align="center">
  <img src="https://github.com/user-attachments/assets/08d28ed3-d2a4-411f-b625-7abe51318bc2" alt="Lambda Intensity All Roads" width="700"/>
</p>

> Areas of high intensity (brighter values) correspond to major intersections, dense urban corridors, and highly sloped or curved roads with low AADT — reflecting model-predicted regions of elevated fatal crash likelihood.


## 7. GLM Results: Poisson Point Process on All Roads


| Variable      | Coefficient | Std. Error | z-value | p-value |
|---------------|-------------|------------|---------|---------|
| Intercept     | -0.7368     | 0.046      | -15.88  | <0.001  |
| Slope         | 0.0192      | 0.008      | 2.43    | 0.015   |
| Curvature     | -1.16e-05   | 8.38e-06   | -1.38   | 0.167   |
| Night         | 0.5429      | 0.032      | 17.12   | <0.001  |
| Surface       | -0.0553     | 0.043      | -1.29   | 0.198   |
| Workzone      | -0.1474     | 0.131      | -1.12   | 0.262   |
| AADT          | -1.51e-05   | 1.43e-06   | -10.54  | <0.001  |



- **Log-Likelihood**: −6522.0  
- **Deviance**: 4950.0  
- **Pearson Chi-square**: 3830.0  
- **Pseudo R² (Cragg & Uhler’s)**: 0.0012  
- **Degrees of Freedom**: 399993


## 8. Road-Type-Specific Modeling: Highways vs. Local Roads

### Poisson GLM Summary: Highways and Interstates


| Variable   | Coef       | Std. Err | z-value | p-value |
|------------|------------|----------|---------|---------|
| Intercept  | -0.5305    | 0.059    | -9.047  | <0.001  |
| Slope      | 0.0162     | 0.009    | 1.728   | 0.084   |
| Curvature  | -6.14e-06  | 1.06e-05 | -0.582  | 0.561   |
| Night      | 0.4358     | 0.038    | 11.610  | <0.001  |
| Surface    | -0.0401    | 0.051    | -0.792  | 0.428   |
| Workzone   | -0.1402    | 0.139    | -1.009  | 0.313   |
| AADT       | -9.67e-06  | 1.42e-06 | -6.810  | <0.001  |

- **Log-Likelihood**: −4082.4  
- **Deviance**: 2402.7  
- **Pseudo R²**: 0.0029


### Poisson GLM Summary: Local Roads


| Variable   | Coef       | Std. Err | z-value | p-value |
|------------|------------|----------|---------|---------|
| Intercept  | -0.9337    | 0.079    | -11.825 | <0.001  |
| Slope      | 0.0181     | 0.015    | 1.206   | 0.228   |
| Curvature  | -4.20e-05  | 1.44e-05 | -2.920  | 0.003   |
| Night      | 0.5859     | 0.059    | 9.930   | <0.001  |
| Surface    | -0.0878    | 0.081    | -1.088  | 0.277   |
| Workzone   | 0.2232     | 0.380    | 0.588   | 0.557   |
| AADT       | -4.31e-05  | 4.59e-06 | -9.394  | <0.001  |


- **Log-Likelihood**: −2301.6  
- **Deviance**: 2251.2  
- **Pseudo R²**: 0.0024

### Spatial Distribution of $\hat{\lambda}(x)$: Highway vs. Local Roads

<p align="center">
  <img src="https://github.com/user-attachments/assets/6bcf1167-7f57-4b0c-8290-1a8f921bf2fd" alt="Lambda Intensity By Road Type" width="700"/>
</p>

> The intensity of fatal crashes $\hat{\lambda}(x)$ is highest on **highway junctions and corridors**. In contrast, local roads exhibit **spatially dispersed intensity**, often centered around urbanized clusters and curved segments.


### Sliding Window Analysis of AADT Coefficient

<p align="center">
  <img src="https://github.com/user-attachments/assets/eca0b406-cb1a-4716-ba60-0fac8fd88b08" alt="AADT Coefficients by Road Type" width="700"/>
</p>

> This contrast suggests that **AADT plays a more substantial role in fatal crash suppression on local roads**, where increases in traffic volume may lead to lower speeds and improved visibility.

