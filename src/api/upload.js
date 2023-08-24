export async function uploadImg(file) {
  const data = new FormData();
  const url = process.env.REACT_APP_CLOUDINARY_URL;

  data.append('file', file);
  data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);

  return fetch(url, {
    method: 'POST',
    body: data,
  })
    .then((response) => response.json())
    .then((data) => data.url);
}
