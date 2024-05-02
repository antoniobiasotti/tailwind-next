import Image from "next/image";

export default function Home() {

  const icons = ["/Heart.svg","/Cherrs.svg","/InstagramLogo.svg","/Pallete.svg","/Scales.svg"] 

  function generateIcon() {
    
  }

  return (
    <div className="flex justify-center items-start max-w-96 h-96 relative bg-gradient-to-b from-pink-600 to-yellow-400">

      <div className="justify-center items-center inline-flex">
        <div className="w-72 text-black font-normal">
          Lenita, você é minha inspiração. Eu penso em você todos os dias.. Obrigado por fazer parte da minha vida, eu te amo muito!
        </div>
      </div>
      <Image
        src={"/Heart.svg"}
        width={32} 
        height={32}
        alt=""
      />

    </div>
  );
}
