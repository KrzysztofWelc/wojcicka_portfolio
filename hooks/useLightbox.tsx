import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { ReactNode, RefObject, useEffect } from 'react';

interface UseLightboxProps {
    containerId?: string
    slideSelector: string
}

interface LightboxItemProps {
    url: string
    width: number
    height: number
    children: ReactNode
    className: string
}

export default function useLightbox({ slideSelector, containerId }: UseLightboxProps) {
    useEffect(() => {
        const config = containerId ? { gallery: containerId, children: slideSelector } : { gallery: slideSelector }
        const lightbox = new PhotoSwipeLightbox({
            ...config,
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
        };
    }, [slideSelector, containerId]);
}

export function LightboxItem({ width, height, url, children, className }: LightboxItemProps): ReactNode {
    return (
        <a
            href={url}
            data-pswp-width={width}
            data-pswp-height={height}
            className={className}
        >
            {children}
        </a>
    )
}