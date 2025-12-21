// src/services/api.ts

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const getArticles = async () => {
    const response = await fetch(`${API_URL}/public/articles`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des articles');
    return response.json();
};

export const getProjects = async () => {
    const response = await fetch(`${API_URL}/public/projects`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des projets');
    return response.json();
};

export const sendContactMessage = async (data: { name: string; email: string; subject: string; content: string }) => {
    const response = await fetch(`${API_URL}/public/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erreur lors de l\'envoi du message');
    return response.json();
};
