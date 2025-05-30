// This file exports utility functions that can be used throughout the application for various tasks. 

export const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
};

export const generateRandomId = (): string => {
    return Math.random().toString(36).substr(2, 9);
};

// Add more utility functions as needed.