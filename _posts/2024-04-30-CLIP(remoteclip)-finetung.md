---
tags: CLIP Remote-Sensing Computer-Vision Deep-Learning PyTorch
---

**For Complete PDF(english): [remote_clip_finetuning.pdf](https://github.com/Pengyu-gis/Pengyu-gis.github.io/blob/master/_posts/remote_clip_finetuning.pdf)** <br>
**For Complete Code(pytorch): [github](https://github.com/Pengyu-gis/RemoteCLIP)**<br> contact: [email](pengyuchen2002@gmail.com); much thanks to this great work: [remoteclip](https://github.com/ChenDelong1999/RemoteCLIP)
<br>


## What is CLIP?

CLIP is a model that fundamentally changes how machines understand images by training on a combination of image and text data. This method, known as contrast learning, involves matching images with relevant text descriptions in a high-dimensional space. The core idea is that images and their corresponding texts are brought closer in this space, while unrelated pairs are pushed apart.

## Contrast Learning 

The contrast learning framework within CLIP involves three main elements:

-   **Anchor Sample:** The main image.
-   **Positive Sample:** An image that is similar or related to the anchor.
-   **Negative Sample:** An image that is different from the anchor.

This setup teaches the AI to understand and categorize images based on textual descriptions rather than traditional labels, facilitating a more flexible and scalable approach to model training.

## What is RemoteCLIP?
Building on the foundations of CLIP, RemoteCLIP adapts this powerful framework specifically for remote sensing applications. This adaptation is crucial for tasks like satellite image analysis, where context and precision are paramount.

RemoteCLIP enhances the zero-shot capabilities of CLIP by fine-tuning the model on domain-specific datasets. This approach ensures that RemoteCLIP not only inherits the robustness of CLIP but also tailors it to the nuances of geographic and environmental data.


## fine-tuning code
For complete code, please check: https://github.com/Pengyu-gis/RemoteCLIP/blob/main/remoteclip_finetuning_test1.ipynb

This is the dataloader code:
```py
import os
import pandas as pd
from PIL import Image
import torch
from torchvision import transforms
from torch.utils.data import Dataset, DataLoader

class ImageTextDataset(Dataset):
    def __init__(self, annotations_file, img_dir, transform=None):
        # self.img_labels = pd.read_csv(annotations_file)
        self.img_labels = pd.read_csv(annotations_file)

        self.img_dir = img_dir
        self.transform = transform

    def __len__(self):
        return len(self.img_labels)

    def __getitem__(self, idx):
      img_path = os.path.join(self.img_dir, self.img_labels.iloc[idx, 0])
      image = Image.open(img_path)
      image = image.convert('RGB')  # Convert to RGB
      caption = self.img_labels.iloc[idx, 1]
      if self.transform:
          image = self.transform(image)
      return image, caption


# data transform
transform = transforms.Compose([
    transforms.Resize((224, 224)),  # Resize images to the expected input size of the model
    transforms.ToTensor(),  # Convert images to PyTorch tensors
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),  # Normalize images
])


# creat dataset and dataloader
dataset = ImageTextDataset(annotations_file='/content/drive/MyDrive/my_clip/sea_clip_dataset/caption.csv',
                           img_dir='/content/drive/MyDrive/my_clip/sea_clip_dataset/images',
                           transform=transform)
dataloader = DataLoader(dataset, batch_size=32, shuffle=True)
```

