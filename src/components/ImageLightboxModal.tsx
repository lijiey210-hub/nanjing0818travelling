import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RefreshCw, Download, Maximize2 } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  subtitle,
  description
}) => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  if (!isOpen) return null;

  const handleZoomIn = () => setScale((s) => Math.min(2.5, s + 0.25));
  const handleZoomOut = () => setScale((s) => Math.max(0.5, s - 0.25));
  const handleReset = () => {
    setScale(1);
    setRotation(0);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col justify-between p-2 sm:p-6 overflow-hidden animate-fadeIn">
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white bg-black/40 p-3 rounded-lg backdrop-blur-md border border-white/10 z-20">
        <div>
          <h3 className="text-base sm:text-lg font-bold font-serif flex items-center gap-2">
            <Maximize2 className="w-4 h-4 text-[#8C7B60]" />
            {title}
          </h3>
          {subtitle && <p className="text-xs text-[#D9D1C7] font-serif">{subtitle}</p>}
        </div>

        {/* Toolbar controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomIn}
            className="p-2 bg-white/10 hover:bg-white/20 rounded text-white transition cursor-pointer"
            title="放大"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 bg-white/10 hover:bg-white/20 rounded text-white transition cursor-pointer"
            title="缩小"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={handleReset}
            className="p-2 bg-white/10 hover:bg-white/20 rounded text-white transition cursor-pointer"
            title="重置"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={handleDownload}
            className="px-3 py-1.5 bg-[#5A5A40] hover:bg-[#8C7B60] rounded text-xs font-bold text-white transition flex items-center gap-1 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            下载高洁原图
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-white/20 hover:bg-red-600 rounded-full text-white transition cursor-pointer ml-2"
            title="关闭"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Image Stage Container */}
      <div className="flex-1 flex items-center justify-center overflow-auto p-4 my-2 relative">
        <div 
          className="transition-transform duration-200 ease-out max-w-full max-h-full flex items-center justify-center"
          style={{
            transform: `scale(${scale}) rotate(${rotation}deg)`,
          }}
        >
          <img
            src={imageUrl}
            alt={title}
            referrerPolicy="no-referrer"
            className="max-h-[82vh] w-auto object-contain rounded-lg shadow-2xl border-2 border-[#8C7B60]/40"
          />
        </div>
      </div>

      {/* Bottom Description */}
      {description && (
        <div className="text-center text-xs text-[#D9D1C7] bg-black/50 p-2.5 rounded-lg border border-white/10 backdrop-blur-md max-w-3xl mx-auto z-20 font-serif">
          💡 {description}
        </div>
      )}
    </div>
  );
};
