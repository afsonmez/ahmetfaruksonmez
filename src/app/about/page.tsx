import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
const page = () => {
  const items = [
    { hobby: "coding" },
    { hobby: "playing games" },
    { hobby: "Watching Anima" },
    { hobby: "Tech Blog writing" },
    { hobby: "creating Cool Projects" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <div className="flex flex-col gap-3">

        <Heading>
          Psikolji Öğrencisi & <br /> Grafik Tasarımcı
        </Heading>

        <FramerWrapper y={0} x={100} >
        <p className="font-poppins text-md w-full text-primary max-sm:text-lg bg-white p-2 rounded-xl">
Merhaba! Ben Ahmet Faruk Sönmez,<br /><br />
 Atatürk Üniversitesi Psikoloji Bölümü öğrencisiyim. İlgi alanlarım esasında gerek grafik tasarım tecrübem gerekse psikoloji bölümünün getirisi olarak tasarımın psikoloji üzerindeki etkisi etrafında oluştu. Bu alandaki bilgi ve becerilerimi geliştirmek için sürekli olarak araştırmalar yapıyor, güncel literatürü takip ediyorum.<br /><br />
Kullanıcı Deneyimi ve tasarım psikolojisine olan ilgim kurucu ortağı olduğum Alavanweb&apos;de, kullanıcı dostu ve birbirinden farklı tasarım dilleri ile oluşturduğum ürünler ve müşterilerden aldığım geri bildirimlerle oluşmaya başladı. Ticari faliyetlerimi ikinci plana atıp psikoloji bölümünü okumaya başladığımda ise daha farklı bir bakış açısıyla yaklaştığım bu ilgimin ilerdeki çalışmalarıma önayak olacağı kanaatindeyim. Tasarım psikolojisinin yanı sıra okuduğum bölümün getirisi olarak son zamanlarda psikolojinin deneysel tarafına da oldukça ilgiliyim.<br /><br />
Gelecekte, Tasarım psikolojisi, kullanıcı deneyimi ve deneysel psikoloji gibi ilgi alanlarımı yerine göre endüstride ve akademik çalışmalarımda kullanarak piyasaya ve akademik camiaya faydalı olma niyetindeyim. Bu doğrultusunda, hem akademik hem de endüstriyel kariyerimi titizlikle şekillendiriyorum.<br /><br />

</p>


        </FramerWrapper>
      </div>

    </div>
  );
};

export default page;
