import Image from "next/image";
import profilePic from '../../public/white1.png'
import facebook from '../../public/face.png'
import instagram from '../../public/insta.png'
import tiktok from '../../public/tiktok.png'
import whatsapp from '../../public/whatsapp.png'
import phone from '../../public/phone.png'
import location from '../../public/location.png'
import CardComponent from "./CardComponent";
export default function Home() {

  const cards = [
    {
      imageUrl: facebook,
      ar_title: 'صفحة الفيسبوك',
      en_title: 'Facebook',
      link: 'https://www.facebook.com/BeautyClinicDrZainab?mibextid=ZbWKwL'
    },
    {
      imageUrl: instagram,
      ar_title: 'صفحة الانستكرام',
      en_title: 'instagram',
      link: 'https://www.instagram.com/dr.zainab.sharba?igsh=MWluNHg0anZlMDBnMQ=='
    },
    {
      imageUrl: tiktok,
      ar_title: 'تيك توك',
      en_title: 'TikTok',
      link: 'https://www.tiktok.com/@zainasvyjlq?_r=1&_d=e581cdb6lkhmf5&sec_uid=MS4wLjABAAAAZuCdF-V35vYcWuxY9YmMPcUrzGVBI2d1OeWJWSxzza-IQYpsKnfmvGSHg3svYyZx&share_author_id=7312198901084357638&sharer_language=ar&source=h5_m&u_code=de88362e40i4h1&timestamp=1710367513&user_id=6867237219607397382&sec_user_id=MS4wLjABAAAA7wykLo_peneDHc__2DUHLYXxlSAE8ixpKI3UVAvFT6u0pHKFwk84S36M-Kl9KAhk&utm_source=telegram&utm_campaign=client_share&utm_medium=android&share_iid=7345512421782505221&share_link_id=11e31a69-01f9-406b-a81a-db583dfc7eee&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b2001%2Cb5836&social_share_type=5&enable_checksum=1'
    },
    {
      imageUrl: whatsapp,
      ar_title: 'الواتس اب',
      en_title: 'Whatsapp',
      link: 'https://www.facebook.com/BeautyClinicDrZainab?mibextid=ZbWKwL'
    },
    {
      imageUrl: phone,
      ar_title: 'رقم الهاتف',
      en_title: 'Phone Number',
      link: 'https://www.facebook.com/BeautyClinicDrZainab?mibextid=ZbWKwL'
    },
    {
      imageUrl: location,
      ar_title: 'موقع العيادة',
      en_title: 'Location',
      link: 'https://www.facebook.com/BeautyClinicDrZainab?mibextid=ZbWKwL'
    },
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-[15px]">

      <div className="w-full flex items-center justify-center ">
        {/* head of page */}
        <div className="flex items-center justify-center">
          {/* div string name */}
          <div className="flex-col items-center justify-center">
            <h1 className="font-extrabold  md:text-[25px] text-[16px]  text-center text-white">الدكتورة الاختصاص</h1>

            <h1 className="font-extrabold  md:text-[30px] text-[20px] text-center text-lg text-yellow-400">زينب فتحي شربة</h1>
          </div>
          <Image
            src={profilePic}
            alt="Cover Image"
            className="object-cover"
            width={200}
            height={200}
          />


        </div>
      </div>


      <div className="w-full max-w-[600px] flex items-center justify-center flex-wrap gap-2">
        {cards.map((card, idx) => (
          <CardComponent imageUrl={card.imageUrl} ar_title={card.ar_title} en_title={card.en_title} link={card.link} key={idx} />
    
        ))}

      </div>


    



      {/* Footer */}
      <footer className="text-center text-white w-full py-4">
        © 2024 <a href="#">Ali S. Alshara</a>. All rights reserved.
      </footer>
      {/* </div> */}
    </main>
  );
}
