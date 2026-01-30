/**
 * Translations for multi-language support
 * English (en) and Turkish (tr)
 */

export type Language = 'en' | 'tr';

export const translations = {
    en: {
        // Navbar
        appTitle: 'Labelling App',
        developer: 'developed by Emirhan Aydın',

        // Home Screen
        welcome: 'Welcome',
        selectMedia: 'Select the media type you want to label',
        photo: 'Photo',
        video: 'Video',
        photoDescription: 'Take a photo or select from gallery',
        videoDescription: 'Record video or select from gallery',
        permissionInfo: 'Required permissions will be requested based on your selection',

        // Settings Menu
        settings: 'Settings',
        theme: 'Theme',
        light: 'Light',
        dark: 'Dark',
        language: 'Language',

        // Explore/Settings Screen
        settingsTitle: 'Settings',
        settingsComingSoon: 'Settings coming soon',

        // Photo Screen
        takePhoto: 'Take Photo',
        selectFromGallery: 'Select from Gallery',
        camera: 'Camera',
        gallery: 'Gallery',
        cameraDescription: 'Capture a new photo',
        galleryDescription: 'Choose from existing photos',

        // Video Screen
        recordVideo: 'Record Video',
        videoCamera: 'Video Camera',
        videoGallery: 'Video Gallery',
        videoCameraDescription: 'Record a new video',
        videoGalleryDescription: 'Choose from existing videos',

        // Common
        back: 'Back',
        cancel: 'Cancel',
        confirm: 'Confirm',
        close: 'Close',
    },
    tr: {
        // Navbar
        appTitle: 'Labelling App',
        developer: 'developed by Emirhan Aydın', // Stays in English as requested

        // Home Screen
        welcome: 'Hoş Geldiniz',
        selectMedia: 'Etiketlemek istediğiniz medya türünü seçin',
        photo: 'Fotoğraf',
        video: 'Video',
        photoDescription: 'Fotoğraf çekin veya galeriden seçin',
        videoDescription: 'Video kaydedin veya galeriden seçin',
        permissionInfo: 'Seçiminize göre ilgili izinler talep edilecektir',

        // Settings Menu
        settings: 'Ayarlar',
        theme: 'Tema',
        light: 'Aydınlık',
        dark: 'Karanlık',
        language: 'Dil',

        // Explore/Settings Screen
        settingsTitle: 'Ayarlar',
        settingsComingSoon: 'Ayarlar yakında eklenecek',

        // Photo Screen
        takePhoto: 'Fotoğraf Çek',
        selectFromGallery: 'Galeriden Seç',
        camera: 'Kamera',
        gallery: 'Galeri',
        cameraDescription: 'Yeni bir fotoğraf çekin',
        galleryDescription: 'Mevcut fotoğraflardan seçin',

        // Video Screen
        recordVideo: 'Video Kaydet',
        videoCamera: 'Video Kamera',
        videoGallery: 'Video Galeri',
        videoCameraDescription: 'Yeni bir video kaydedin',
        videoGalleryDescription: 'Mevcut videolardan seçin',

        // Common
        back: 'Geri',
        cancel: 'İptal',
        confirm: 'Onayla',
        close: 'Kapat',
    },
} as const;

export type TranslationKey = keyof typeof translations.en;
