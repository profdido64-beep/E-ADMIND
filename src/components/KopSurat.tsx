import React from 'react';
import { SchoolProfile } from '../types';

// Extract ID from user's Google Drive link: 1uJ4ACirNnGY7NIErAZY7qwNSekC0AuQm
const logoKiriUrl = "https://drive.google.com/thumbnail?id=1uJ4ACirNnGY7NIErAZY7qwNSekC0AuQm";
  
// Extract ID from user's Google Drive link: 1-5wkGy5GmreMK0jgcuL81cy5AZbBw7gi
const logoKananUrl = "https://drive.google.com/thumbnail?id=1-5wkGy5GmreMK0jgcuL81cy5AZbBw7gi";

export const LogoKabupatenCianjur: React.FC<{
  className?: string;
  size?: number;
  customUrl?: string;
}> = ({ className = '', size = 76, customUrl }) => {
  return (
    <img
      src={customUrl || logoKiriUrl}
      alt="Logo Kabupaten Cianjur"
      width={size}
      className={`object-contain inline-block shrink-0 ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

export const LogoSdnSukalaksana: React.FC<{
  className?: string;
  size?: number;
  customUrl?: string;
}> = ({ className = '', size = 76, customUrl }) => {
  return (
    <img
      src={customUrl || logoKananUrl}
      alt="Logo SD Negeri Sukalaksana"
      width={size}
      className={`object-contain inline-block shrink-0 ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

interface KopSuratProps {
  profile?: SchoolProfile;
  showBorder?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const KopSurat: React.FC<KopSuratProps> = ({
  profile,
  showBorder = true,
  className = '',
  size = 'md',
}) => {
  const logoSize = size === 'sm' ? 62 : size === 'lg' ? 95 : 85;

  const schoolName = profile?.name || 'SD NEGERI SUKALAKSANA';
  const subdistrictOffice = profile?.subdistrictOffice || 'KECAMATAN SUKANAGARA';
  const addressLine =
    profile?.address && profile?.postalCode
      ? `Alamat : ${profile.address} ${profile.postalCode}`
      : 'Alamat : Kp. Sukalaksana Desa Sukalaksana Kec. Sukanagara Kab. Cianjur 43264';

  return (
    <div className={`w-full bg-white select-none ${className}`}>
      <div className="flex items-center justify-between gap-2 sm:gap-4 px-1 py-1">
        {/* LOGO KIRI: Lambang Daerah */}
        <div className="shrink-0 flex items-center justify-center">
          <LogoKabupatenCianjur size={logoSize} customUrl={profile?.logoCianjurUrl} />
        </div>

        {/* TENGAH: Teks Kop Surat Resmi */}
        <div className="flex-1 text-center text-black leading-tight px-2 sm:px-4" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          <div style={{ fontSize: size === 'sm' ? '12px' : '16px' }}>DINAS PENDIDIKAN PEMUDA DAN OLAHRAGA</div>
          <div style={{ fontSize: size === 'sm' ? '12px' : '16px' }}>KABUPATEN CIANJUR</div>
          <div style={{ fontSize: size === 'sm' ? '18px' : '24px', fontWeight: 'bold', margin: '2px 0' }}>
            {schoolName}
          </div>
          <div style={{ fontSize: size === 'sm' ? '12px' : '16px' }}>{subdistrictOffice}</div>
          <div style={{ fontSize: size === 'sm' ? '11px' : '14px', fontStyle: 'italic', marginTop: '4px' }}>
            {addressLine}
          </div>
        </div>

        {/* LOGO KANAN: Lambang Sekolah */}
        <div className="shrink-0 flex items-center justify-center">
          <LogoSdnSukalaksana size={logoSize} customUrl={profile?.logoSchoolUrl || profile?.logoUrl} />
        </div>
      </div>

      {/* Official Government Double Border */}
      {showBorder && (
        <div className="mt-3 mb-5" style={{ borderBottom: '3px double #000000' }} />
      )}
    </div>
  );
};
