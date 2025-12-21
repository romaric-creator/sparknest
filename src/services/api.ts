// src/services/api.ts

const API_URL = import.meta.env.VITE_API_URL || 'https://backend-sparknest-site.vercel.app';

export const getArticles = async () => {
    const response = await fetch(`${API_URL}/api/public/articles`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des articles');
    return response.json();
};

export const getArticleById = async (id: string) => {
    const response = await fetch(`${API_URL}/api/public/articles/${id}`);
    if (!response.ok) throw new Error('Erreur lors de la récupération de l\'article');
    return response.json();
};

export const getProjects = async () => {
    const response = await fetch(`${API_URL}/api/public/projects`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des projets');
    return response.json();
};

export const getServices = async () => {
    const response = await fetch(`${API_URL}/api/public/services`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des services');
    return response.json();
};

export const getTechnologies = async () => {
    const response = await fetch(`${API_URL}/api/public/technologies`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des technologies');
    return response.json();
};

export const getTestimonials = async () => {
    const response = await fetch(`${API_URL}/api/public/testimonials`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des témoignages');
    return response.json();
};

export const getMarketplaceItems = async () => {
    const response = await fetch(`${API_URL}/api/public/marketplace-items`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des articles de la marketplace');
    return response.json();
};

export const sendContactMessage = async (data: { name: string; email: string; subject: string; content: string }) => {
    const response = await fetch(`${API_URL}/api/public/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erreur lors de l\'envoi du message');
    return response.json();
};
