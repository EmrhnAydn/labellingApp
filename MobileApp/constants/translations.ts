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
        permissionGranted: 'Permission granted',
        permissionRequired: 'Permission required',
        photoPageTitle: 'Photo',
        photoPageSubtitle: 'Choose an option to take a photo or select from gallery',
        videoPageTitle: 'Video',
        videoPageSubtitle: 'Choose an option to record a video or select from gallery',
        continueText: 'Continue',
        selectFrame: 'Select Frame',
        recording: 'Recording...',

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

        // AI Analysis Screen
        analysisTitle: 'AI Analysis',
        modeCaption: 'Caption',
        modeQuery: 'Query',
        modeDetect: 'Detect',
        modePoint: 'Point',
        modeSegment: 'Segment',
        captionLength: 'Caption Length',
        captionShort: 'Short',
        captionNormal: 'Normal',
        captionLong: 'Long',
        enterQuestion: 'Enter your question...',
        enterObject: 'Enter object to find...',
        analyzing: 'Analyzing...',
        analyze: 'Analyze',
        objectsFound: 'objects found',
        pointsFound: 'points found',
        segmentComplete: 'Segmentation complete',
        noResults: 'No results found',
        noImage: 'No image selected',
        apiError: 'API error occurred',
        noApiKey: 'API key not configured',

        // API Key Management
        apiKeyManagement: 'API Key Management',
        apiKeyDescription: 'Manage your Moondream API keys',
        addApiKey: 'Add API Key',
        apiKeyName: 'Key Name',
        apiKeyValue: 'API Key',
        noApiKeys: 'No API keys added',
        activeKey: 'Active',
        deleteKey: 'Delete',
        selectKey: 'Select',
        apiKeyRequired: 'API key required for analysis',

        // Source Code & Developer Info
        sourceCode: 'Source Code',
        developerInfo: 'Developer Information',
        portfolio: 'Portfolio',
        githubProfile: 'GitHub Profile',
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
        permissionGranted: 'İzin verildi',
        permissionRequired: 'İzin gerekli',
        photoPageTitle: 'Fotoğraf',
        photoPageSubtitle: 'Fotoğraf çekmek veya galeriden seçmek için bir seçenek belirleyin',
        videoPageTitle: 'Video',
        videoPageSubtitle: 'Video kaydetmek veya galeriden seçmek için bir seçenek belirleyin',
        continueText: 'Devam Et',
        selectFrame: 'Kareyi Seç',
        recording: 'Kayıt yapılıyor...',

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

        // AI Analysis Screen
        analysisTitle: 'AI Analiz',
        modeCaption: 'Açıklama',
        modeQuery: 'Soru',
        modeDetect: 'Tespit',
        modePoint: 'Nokta',
        modeSegment: 'Segment',
        captionLength: 'Açıklama Uzunluğu',
        captionShort: 'Kısa',
        captionNormal: 'Normal',
        captionLong: 'Uzun',
        enterQuestion: 'Sorunuzu yazın...',
        enterObject: 'Aranacak nesne...',
        analyzing: 'Analiz ediliyor...',
        analyze: 'Analiz Et',
        objectsFound: 'nesne bulundu',
        pointsFound: 'nokta bulundu',
        segmentComplete: 'Segmentasyon tamamlandı',
        noResults: 'Sonuç bulunamadı',
        noImage: 'Görsel seçilmedi',
        apiError: 'API hatası oluştu',
        noApiKey: 'API anahtarı yapılandırılmamış',

        // API Key Management
        apiKeyManagement: 'API Anahtarı Yönetimi',
        apiKeyDescription: 'Moondream API anahtarlarınızı yönetin',
        addApiKey: 'API Anahtarı Ekle',
        apiKeyName: 'Anahtar Adı',
        apiKeyValue: 'API Anahtarı',
        noApiKeys: 'API anahtarı eklenmemiş',
        activeKey: 'Aktif',
        deleteKey: 'Sil',
        selectKey: 'Seç',
        apiKeyRequired: 'Analiz için API anahtarı gerekli',

        // Source Code & Developer Info
        sourceCode: 'Kaynak Kod',
        developerInfo: 'Geliştirici Bilgisi',
        portfolio: 'Portfolyo',
        githubProfile: 'GitHub Profili',
    },
} as const;

export type TranslationKey = keyof typeof translations.en;
