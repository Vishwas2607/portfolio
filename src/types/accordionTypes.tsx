import type { ReactNode } from "react";

export interface ItemType {
    itemId: string;
    isOpen: boolean;
};

export interface AccordionContextType {
    items: Record<string,boolean>;
    setItem: ({itemId,isOpen}: ItemType) => void;
};

export interface AccordionProviderType {
    allowMultiple: boolean;
    children: ReactNode;
}

export interface AccordionHeaderType {
    title: string;
    miniInfo: string,
    techStack: string,
    liveDemo: string,
    github: string,
}

export interface AccordionItemIdProviderType {
    id: string;
    children: ReactNode;
}

type imagesUrl = {img1:string, img2:string,img3:string};

export interface AccordionPanelType {
    images: imagesUrl;
    overview: string;
    keyFeatures: string;
    whatILearned: string;
    challenges: string;
}