# 📘 Notes on Point Processes (Spatial and Spatio-Temporal View)

## Part 1: Fundamentals of Point Processes

### 1.1 What is a Point Process?

A **point process** is a random collection of events—or "points"—occurring in a mathematical space such as:

- A 1D timeline (e.g., times of phone calls),
- A 2D spatial domain (e.g., locations of trees, crimes, or disease cases),
- Or a 3D space-time continuum (e.g., earthquakes with locations and times).

A **spatial point process** models the random locations of events in space:  
Let $W \subset \mathbb{R}^2$ be a bounded spatial domain. A realization of a point process $\mathbf{X}$ is a finite set of points:
$$
\mathbf{X} = \{ s_1, s_2, \dots, s_n \}, \quad s_i \in W.
$$

A **spatio-temporal point process** extends this by adding time:
$$
\mathbf{X} = \{ (s_1, t_1), (s_2, t_2), \dots, (s_n, t_n) \}, \quad s_i \in W, \, t_i \in T \subset \mathbb{R}.
$$

> Each realization is a "dot map" of where (and when) events occurred.

---

### 1.2 Why Use Point Processes?

Point processes capture not only the **count** of events, but also their **pattern**:
- Are events **clustered**, **random**, or **regularly spaced**?
- Are they **stationary** or **inhomogeneous** in space/time?
- Do they exhibit **interaction** (e.g., attraction or repulsion)?

These questions cannot be answered by simple aggregate counts.

---

### 1.3 Basic Types of Point Processes

- **Homogeneous Poisson Process (HPP)**: Events are completely random; constant intensity $\lambda$.
- **Inhomogeneous Poisson Process (IPP)**: Intensity $\lambda(s)$ varies with location.
- **Cluster Processes** (e.g., Thomas process): Points cluster around "parent" events.
- **Inhibitory Processes** (e.g., Strauss process): Points repel each other.

---

### 1.4 Assumptions and Properties of a Point Process

Let $W \subset \mathbb{R}^2$ denote a bounded spatial window (e.g., a study region), and let $N(B)$ denote the number of events (points) falling within a Borel-measurable subset $B \subset W$.

For a well-defined point process, the following structural properties are often assumed or examined:

---

#### 🔹 Simplicity

A point process is said to be **simple** if it does not place multiple events at the same location.

Formally:
$$
\mathbb{P}(s_i = s_j) = 0 \quad \text{for all } i \neq j
$$

This ensures that points are distinct and no two events occur at exactly the same coordinates.

**Geospatial Interpretation:**
- In most physical phenomena (e.g., tree locations, accident sites), it is unlikely for two events to be recorded at precisely the same point.
- However, in some applications (e.g., telecommunications or highly discrete datasets), **non-simple** processes may arise and need to be treated carefully (e.g., using marked or multi-type point processes).

---

#### 🔹 Local Finiteness

A point process is **locally finite** if, for any bounded region $B \subset W$, the number of points in $B$ is finite almost surely:

$$
\mathbb{P}(N(B) < \infty) = 1
$$

This condition prevents the occurrence of an infinite number of events in a finite region, which would be nonphysical.

**Geospatial Interpretation:**
- Ensures model realism: one cannot observe infinite car crashes, trees, or disease cases within a finite spatial extent.
- A necessary assumption for practical statistical inference and visualization.

---

#### 🔹 Stationarity (Translation Invariance)

A point process is **stationary** if its statistical properties do not change when the entire process is translated in space.

Formally, let $\mathbf{X}$ be a point process and let $u \in \mathbb{R}^2$ be a translation vector. Then $\mathbf{X}$ is stationary if:
$$
\mathbf{X} \overset{d}{=} \mathbf{X} + u
$$
i.e., the distribution of $\mathbf{X}$ is the same as that of $\mathbf{X} + u$.

**First-order stationarity** implies that the intensity function $\lambda(s)$ is constant:
$$
\lambda(s) = \lambda > 0 \quad \text{for all } s \in W
$$

**Geospatial Interpretation:**
- In urban planning, assuming stationarity would imply that events (e.g., accidents) are equally likely across the entire city—often unrealistic.
- Therefore, **inhomogeneous models** (non-stationary) are typically more appropriate for real-world data.

---

#### 🔹 Isotropy (Rotational Invariance)

A point process is **isotropic** if its properties are invariant under rotations about any point (typically the origin).

Formally, for a rotation matrix $R \in \text{SO}(2)$, the process satisfies:
$$
\mathbf{X} \overset{d}{=} R \mathbf{X}
$$

This implies that second-order properties such as pair correlation functions depend only on the distance between points, not the direction.

**Geospatial Interpretation:**
- An isotropic process implies there is no preferred direction in the spatial pattern.
- Violated in cases like:
  - Linear features (e.g., road networks, rivers),
  - Environmental gradients (e.g., pollution diffusion in wind direction),
  - Urban corridors or coastline-aligned processes.

---

### Summary Table

| Property       | Description                                             | Practical Implication                                      |
|----------------|---------------------------------------------------------|-------------------------------------------------------------|
| Simplicity     | No duplicate points                                     | Ensures unique event locations                             |
| Local Finiteness | Finite points in any bounded region                   | Prevents unrealistic infinite densities                    |
| Stationarity   | Invariant under translation                            | Events equally likely everywhere (if homogeneous)          |
| Isotropy       | Invariant under rotation                               | No directional bias in spatial structure                   |

---

### Common Violations

- **Nonstationarity**: Urban centers have higher intensity of events (accidents, crimes).
- **Anisotropy**: Events aligned along roads, rivers, coastlines, etc.
- **Non-simplicity**: Duplicated events (e.g., multiple GPS pings at same location).
- **Local non-finiteness**: Sensor noise or faulty data generation.

These violations guide the choice of models (e.g., Poisson vs Cox, homogeneous vs inhomogeneous, isotropic vs anisotropic kernels).



---

## Part 2: Mathematical Framework

## 2.1 First-Order Properties — The Intensity Function

The **intensity function** $\lambda(s)$ is the foundational concept of the first-order structure in a point process. It describes the expected number of events per unit area at any spatial location $s \in W$:

$$
\lambda(s) = \lim_{|ds| \to 0} \frac{\mathbb{E}[N(ds)]}{|ds|}
$$

where:
- $ds$ is a small area around location $s$,
- $N(ds)$ is the number of points falling within $ds$,
- $\mathbb{E}[\cdot]$ denotes expectation.

---

### 🔹 Units and Interpretation

- Units: typically points per km² or per m².
- Interpretation: high $\lambda(s)$ indicates a denser expected concentration of events near $s$.

---

### 🔹 Homogeneous Poisson Point Process (HPPP)

In the homogeneous case, the intensity is constant throughout the domain:
$$
\lambda(s) = \lambda > 0 \quad \text{for all } s \in W
$$

Let $B \subset W$ be a region with area $|B|$. Then:

- The number of points $N(B)$ in $B$ follows a Poisson distribution:
  $$
  N(B) \sim \text{Poisson}(\lambda |B|)
  $$

- Events are **independent**: the number of points in disjoint regions are independent random variables.

---

### 🔹 Inhomogeneous Poisson Point Process (IPPP)

In the inhomogeneous case, the intensity varies with location:
$$
\lambda(s) : W \rightarrow \mathbb{R}^+
$$

Then:
- For any region $B$:
  $$
  N(B) \sim \text{Poisson} \left( \int_B \lambda(s) \, ds \right)
  $$

- The expected number of points in $B$ is:
  $$
  \mathbb{E}[N(B)] = \int_B \lambda(s) \, ds
  $$

> This model accounts for spatial inhomogeneity (e.g., higher intensity of crime in urban cores vs suburbs).

---

## 2.2 Estimating Intensity from Observed Data

### 🔹 Kernel Smoothing Estimator

Given a realization of $n$ observed points $\{s_1, \dots, s_n\}$, the intensity function $\lambda(s)$ can be nonparametrically estimated using **kernel smoothing**:

$$
\hat{\lambda}_h(s) = \frac{1}{n} \sum_{i=1}^n \frac{1}{h^2} \, K\left( \frac{\lVert s - s_i \rVert}{h} \right)
$$

where:
- $h$ is the **bandwidth**, controlling the smoothing level,
- $K(\cdot)$ is the **kernel function** (e.g., Gaussian, Epanechnikov),
- $\lVert s - s_i \rVert$ is the Euclidean distance between evaluation point $s$ and observation $s_i$.

**Common kernel choices:**
- Gaussian: $K(u) = \frac{1}{2\pi} e^{-u^2/2}$
- Epanechnikov: $K(u) = \frac{3}{4}(1 - u^2)$ for $|u| < 1$

> This yields a smooth surface approximation of intensity across space — analogous to KDE (Kernel Density Estimation).

---

### 🔹 What is Kernel Smoothing?

**Kernel smoothing** is a nonparametric technique that estimates a continuous function (here, the intensity surface) by averaging nearby observations with weights decreasing with distance.

It can be visualized as placing a "bump" (the kernel) over each observed point and summing all bumps to form a surface.

- Small $h$: high resolution, sensitive to local variation (but may overfit).
- Large $h$: smoother surface, reduces noise (but may oversmooth).

---

## 2.3 Regression Models in Point Processes

### 🔹 Is Regression Involved?

Yes — particularly for **inhomogeneous** processes, **intensity regression models** are often used.

The goal is to model $\lambda(s)$ as a function of covariates $Z(s)$:
$$
\lambda(s) = \exp\left( \beta_0 + \beta_1 Z_1(s) + \dots + \beta_p Z_p(s) \right)
$$

This is analogous to a **Poisson regression** in generalized linear models (GLM), where:
- $\lambda(s)$ is the mean rate (log-linked),
- $Z_k(s)$ are spatial covariates (e.g., elevation, population density, distance to roads).

---

### 🔹 When is Regression Necessary?

Regression is **not required** for defining a point process but is:
- Necessary for **inference**, **explanation**, or **prediction**,
- Useful when exploring the relationship between spatial events and environmental or contextual variables.

> In contrast, **kernel smoothing** is exploratory, while **regression modeling** enables hypothesis testing and covariate interpretation.

---

### 🔹 Example (Geographic Scenario)

Suppose you're studying wildfire occurrences in California.

- **Without covariates**: Estimate intensity using kernel smoothing.
- **With covariates**: Fit an inhomogeneous Poisson process using:
  - $Z_1(s)$: distance to nearest road,
  - $Z_2(s)$: NDVI (vegetation index),
  - $Z_3(s)$: historical temperature.

Then:
$$
\lambda(s) = \exp( \beta_0 + \beta_1 \cdot \text{RoadDist}(s) + \beta_2 \cdot \text{NDVI}(s) + \beta_3 \cdot \text{Temp}(s) )
$$

This allows for both estimation and interpretation of spatial drivers.

---

## 🔍 2.4 Deriving Intensity for Inhomogeneous Poisson Point Process (IPPP) with Covariates

Suppose we observe $n$ events at locations $s_1, s_2, \dots, s_n \in W$ in a spatial domain $W \subset \mathbb{R}^2$.

Let $\mathbf{Z}(s) = (Z_1(s), \dots, Z_p(s))$ be a vector of $p$ spatial covariates observed at each location $s$.  
We model the intensity function $\lambda(s)$ using a **log-linear regression** form:

### 🔹 Intensity Function (Log-Linear Model)

$$
\lambda(s) = \exp\left( \beta_0 + \sum_{k=1}^p \beta_k Z_k(s) \right)
= \exp\left( \mathbf{Z}(s)^\top \boldsymbol{\beta} \right)
$$

where:
- $\boldsymbol{\beta} = (\beta_0, \beta_1, \dots, \beta_p)^\top$ is the vector of regression coefficients,
- $Z_0(s) \equiv 1$ serves as the intercept term.

---

## 🔹 Likelihood Function for IPPP

In an **IPPP**, the number of points in any Borel set $B$ follows:

$$
N(B) \sim \text{Poisson} \left( \int_B \lambda(s) \, ds \right)
$$

Let $\mathcal{S} = \{s_1, \dots, s_n\}$ be the observed points, and assume conditional independence of locations.  
Then the **likelihood** of observing these $n$ points under intensity $\lambda(s)$ is:

$$
L(\boldsymbol{\beta}) = \left[ \prod_{i=1}^n \lambda(s_i) \right] \cdot \exp\left( - \int_W \lambda(s) \, ds \right)
$$

This formula includes:
- The **product of intensities** at the observed event locations,
- A **normalizing term** to ensure the total intensity over the region $W$ matches the expected number of events.

---

## 🔹 Log-Likelihood Function

Taking the logarithm of the likelihood:

$$
\log L(\boldsymbol{\beta}) = \sum_{i=1}^n \log \lambda(s_i) - \int_W \lambda(s) \, ds
$$

Substitute the log-linear form of $\lambda(s)$:

$$
\log L(\boldsymbol{\beta}) = \sum_{i=1}^n \mathbf{Z}(s_i)^\top \boldsymbol{\beta} - \int_W \exp\left( \mathbf{Z}(s)^\top \boldsymbol{\beta} \right) ds
$$

This is the objective function maximized in **Poisson point process regression** (a type of spatial GLM).

---

## 🔹 Estimating Parameters

To obtain $\hat{\boldsymbol{\beta}}$, maximize $\log L(\boldsymbol{\beta})$ numerically, usually via:

- Newton-Raphson or Fisher scoring algorithms,
- Quasi-likelihood methods,
- Variational inference in Bayesian settings.

In practice, the integral:
$$
\int_W \exp\left( \mathbf{Z}(s)^\top \boldsymbol{\beta} \right) ds
$$
is **approximated using quadrature**, e.g., by discretizing $W$ into grid cells.

---

## 🔹 Interpretation of Coefficients

Each $\beta_k$ describes the **log change in expected event intensity** per unit increase in covariate $Z_k(s)$, holding others constant.

- $\beta_k > 0$ → increasing $Z_k$ leads to higher intensity (e.g., higher population density → more crime events),
- $\beta_k < 0$ → increasing $Z_k$ suppresses intensity.

---

## Example: Fatal Accidents on Roads

Suppose you're modeling crash locations with three covariates:
- $Z_1(s)$: AADT (traffic volume),
- $Z_2(s)$: slope of the road,
- $Z_3(s)$: road curvature.

Then:
$$
\lambda(s) = \exp\left( \beta_0 + \beta_1 \cdot \text{AADT}(s) + \beta_2 \cdot \text{Slope}(s) + \beta_3 \cdot \text{Curvature}(s) \right)
$$

This model can be fitted using maximum likelihood and visualized as an estimated **crash risk surface**.

---


### 2.5 Second-Order Properties — Pair Correlation

Second-order properties study **interaction** between pairs of points. Define the second-order intensity:

$$
\rho^{(2)}(s, s') = \lim_{|ds||ds'| \to 0} \frac{\mathbb{E}[N(ds)N(ds')]}{|ds||ds'|}
$$

The **pair correlation function** $g(s, s')$ is:

$$
g(s, s') = \frac{\rho^{(2)}(s, s')}{\lambda(s)\lambda(s')}
$$

Interpretation:
- $g(s, s') > 1$: clustering
- $g(s, s') = 1$: independence
- $g(s, s') < 1$: inhibition

---

## Part 3: Spatio-Temporal Point Processes

### 3.1 Definition

A **spatio-temporal point process** describes random events in both space and time. Formally:

Let $W \subset \mathbb{R}^2$ be the spatial domain, and $T \subset \mathbb{R}$ be the time interval.

The process generates a finite set:
$$
\mathbf{X} = \{(s_i, t_i)\}_{i=1}^n, \quad s_i \in W, \; t_i \in T.
$$

This could model:
- Disease outbreak data (case locations and times),
- Traffic accidents (locations and timestamps),
- Wildlife sightings (GPS tracks + observation times).

---

### 3.2 Spatio-Temporal Intensity Function

The **spatio-temporal intensity function** $\lambda(s, t)$ gives the expected rate of event occurrence per unit space and time:

$$
\lambda(s, t) = \lim_{|ds| \to 0, \, dt \to 0} \frac{\mathbb{E}[N(ds \times dt)]}{|ds| \cdot dt}
$$

If separable:
$$
\lambda(s, t) = \lambda_S(s) \cdot \lambda_T(t)
$$

This separability simplifies modeling assumptions.

---

### 3.3 Conditional Intensity Function

When the process is **history-dependent** (e.g., self-exciting), we define the **conditional intensity**:

$$
\lambda(s, t \mid \mathcal{H}_t) = \lim_{|ds|, dt \to 0} \frac{\mathbb{E}[N(ds \times dt) \mid \mathcal{H}_t]}{|ds| \cdot dt}
$$

- $\mathcal{H}_t$: history of the process up to time $t$.
- Used in **Hawkes processes**, where past events increase the likelihood of future events nearby.

---

### 3.4 Example Use Case (Urban Crashes)

Let $\lambda(s, t)$ be the intensity of fatal traffic crashes in Charleston over 24 hours.

- High $\lambda(s, t)$ at downtown intersections between 6-9 AM and 5-7 PM.
- Low $\lambda(s, t)$ in residential zones at night.

This structure can be inferred and predicted using kernel smoothing or Poisson regression.

---
