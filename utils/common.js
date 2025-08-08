export const experiumImageUrl = (imageUrl) => {
    if (!imageUrl) return '';
    if (/^https?:\/\//.test(imageUrl)) return imageUrl;
    const baseUrl = process.env.NEXT_IMGS || 'https://11views.com/experium-assets/';
    return `${baseUrl}${imageUrl}`;
};
