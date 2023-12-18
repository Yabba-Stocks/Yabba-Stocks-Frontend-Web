// ProductUpload.js
import React, { useState } from 'react';
import './ProductUpload.css';

const ProductUpload = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState([]);
  const [previewPhotos, setPreviewPhotos] = useState([]);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const selectedPhotos = Array.from(e.target.files);

    setPhotos([...photos, ...selectedPhotos]);

    const selectedPreviewPhotos = selectedPhotos.map((photo) =>
      URL.createObjectURL(photo)
    );

    setPreviewPhotos([...previewPhotos, ...selectedPreviewPhotos]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the product data (productName, description, photos) to the server
    console.log('Product Name:', productName);
    console.log('Description:', description);
    console.log('Photos:', photos);
  };

  return (
    <div className="product-upload-container">
      <h1>Product Upload</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={handleProductNameChange}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </label>

        <label>
          Photos:
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoChange}
          />
        </label>

        <div className="photo-preview">
          {previewPhotos.map((preview, index) => (
            <img key={index} src={preview} alt={`Preview ${index + 1}`} />
          ))}
        </div>

        <button type="submit">Upload Product</button>
      </form>
    </div>
  );
};

export default ProductUpload;
