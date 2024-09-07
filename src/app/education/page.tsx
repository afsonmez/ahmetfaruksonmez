import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import Link from 'next/link';
import HackerBtn from '@/components/HackerBtn'

const educationPage = () => {
  return (
    // HAKKINDA SAYFASI
    <div className="h-full w-full relative flex flex-col items-start gap-10 overflow-hidden">
      
      {/* Eğitim Bölümü */}
      <div className="w-full flex flex-col gap-5">
        <div className="font-poppins text-primary font-bold text-4xl name_underline max-sm:text-3xl">
          Eğitimim
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base">
            Ekim 2023 - Günümüz
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Psikoloji Bölümü Lisans Programı, <br /> Atatürk Üniversitesi
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              Şu anda Atatürk Üniversitesi Psikoloji bölümünde 2. sınıf öğrencisiyim.
            </p>
          </FramerWrapper>
        </div>
      </div>

      {/* İş Deneyimi Bölümü */}
      <div className="w-full flex flex-col gap-5">
        <div className="font-poppins text-primary font-bold text-4xl name_underline max-sm:text-3xl">
          İş Deneyimim
        </div>
        <div className="w-full h-fit flex flex-col gap-4">
          <div className="flex">
            <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base">
              Nisan 2023 - Günümüz
            </FramerWrapper>
            <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
              <div className="text-2xl font-rubik max-sm:text-xl">
                Grafik Tasarımcı, <br /> Alavanweb
              </div>
              <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
                Şu anda kurucu ortağı olduğum AlavanWeb'de pasif olarak grafik tasarım işlerine bakmaktayım.
              </p>
              <Link href="https://www.alavanweb.com" className="inline-flex items-center px-4 py-2 mt-4 ">
                <HackerBtn label='AlavanWeb&apos;i ziyaret edin' />
              </Link>
            </FramerWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
