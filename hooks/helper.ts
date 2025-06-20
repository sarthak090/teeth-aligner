export const dsnCN = (baseClass: string, additionalClasses?: string) => {
    return `${baseClass} ${additionalClasses || ''}`;
};  