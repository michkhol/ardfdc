import Image from "next/image";
import { Montserrat } from "next/font/google";
import headphonePic from "@/public/P2230553.jpg"
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative h-72 w-full">
        <Image className="object-cover z-0 object-center" src={headphonePic} alt="Background" fill={true} />
        <h1 className={`${montserrat.className} relative z-10 font-bold text-center text-5xl pt-20`} style={{color: "#3a96b8"}} >Introduction to<br/> Radio Orienteering</h1>
      </div>
      <div className="text-center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/I9H8irEMnf4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
      </div>
      <div className="lg:w-[60%] m-4">
      Radio orienteering was born in Eastern Europe around the time of the First World War when commanders communicated with troops 
using radios. When the radio was broadcasting you could get a bearing on the enemy. So getting an accurate bearing quickly and careful map reading was important.
Today it is called ARDF (Amateur Radio Direction Finding) internationally and Radio Orienteering in the USA. The principles stay the same: by pointing the antenna of the radio receiver and listening to the signal you can determine the direction of the signal.
<br /><br />The receivers and transmitters use two bands, 80m and 2m. At a competition usually one day is dedicated to one band. The 2m band is considered harder 
than 80m due to reflections of the signal from the surroundings.<br /><br />

<h2 className="text-xl font-semibold" >The foxes, who are they?</h2>
The transmitters are called foxes, probably because they are usually hard to find. Each fox transmits Morse code to identify itself. The code consists of two dahs (<em>M</em>), three dahs (<em>O</em>), 
and the number of dits corresponding to the fox number. For instance, the fox number two will transmit &nbsp;<em>dah-dah dah-dah-dah dit-dit (MOI). </em> Each fox transmits for a 
certain period of time (like 1 minute) and then the next fox starts transmitting on the same frequency. When all foxes finish transmitting, the cycle repeats. 
There are three to five foxes in the course and they can be searched in any order. 
Also usually the course has a homing beacon which continuously transmits&nbsp;<em>MO</em>&nbsp; (without a number) 
on a different frequency. It is located close to the finish to help anyone who gets lost.<br /><br />

<h2 className="text-xl font-semibold" >How does it work?</h2>
The 80m receiver has a directional antenna. The received signal strength varies depending on how you orient the antenna and it has two directional patterns. 
The first has a broad maximum and minimum. It is used most often to determine the general direction to the fox (transmitter) and in the simple cases it is enough to find it.&nbsp;
<br /><br />The second pattern resembles the figure of eight and has two very sharp minimums, opposite of each other. It allows you to take the bearing with much more precision, 
provided you know the general direction already. The receiver has a switch to enable either of the patterns and usually you need both to take a precise bearing when the fox (transmitter) is far away.
<br /><br />

<h2 className="text-xl font-semibold" >What happens when the fox is close?</h2>
Well, the first thing that happens is that the sharp minimums are not sharp anymore due to the specifics of the signal propagation close to the transmitter. 
All that is left is either a broad maximum or broad minimum.<br /><br />
<h2 className="text-xl font-semibold" >Meet the Whoopee</h2>
Human hearing is very adaptive to the signal strength and it is very hard for it to discern small changes. But pitch sensitivity is very high and not adaptive at all. 
When the signal reaches a certain level, it gets converted to a pitched tone which is called a Whoopee. If the transmitter is in the maximum (sense) mode, the highest pitch points to the direction 
of the signal. Even if the pattern is very broad, it becomes very easy to find the fox at close distances (100-200m). Use the volume knob to make the Whoopee more or less prominent. <br />
<br />
<h2 className="text-xl font-semibold" >What about the 2m receivers?</h2>
They only search for the strongest signal, because at that wavelength the antenna pattern is sharp enough to take a meaningful bearing. Watch out for reflections though, they can be as strong as the direct signal 
and even stronger. Most competitors take the bearings on the move and at an elevation because it averages out the reflections.<br />
<br />
{/*
<h2 className="text-xl font-semibold" >Competitions</h2>
2022 US Champs, April 6-10 at Prince William Forest Park, VA, more details&nbsp;<a href="https://backwoodsok.org/2022-ardf-champs-bulletin-2" target="_blank">here</a><br />
2022 World Championship, August 28 - September 3 in Serbia, more details &nbsp;<a href="https://ardf2022.org" target="_blank">here</a><br />
<br /><br />

<h2 className="text-xl font-semibold" >Where can I purchase the receiver?</h2>
Historically every competitor was supposed to build his/her own receiver, it was considered a part of the sport. Now a few are available commercially, mostly from Europe. In the US the 80m receivers 
can be custom ordered in two options: with two banana jacks or with a standard 3.5mm jack. The first comes with the matching headphones, for the second you need to provide your own. It takes about a week 
to build a receiver and the waiting time depends on the number of pending orders. Please contact info@ardfdc.org for ordering and questions about the receiver.
  */}
<h2 className="text-xl font-semibold" >Links</h2>
<a className="underline" href="https://youtu.be/JnKB1JlEPZ4" target="_blank" >ARDF Promo video</a>
<br />
<a className="underline" href="https://youtu.be/PDgL99l5Z_o" target="_blank">Radio Orienteering vs Foot Orienteering (video)</a>
<br />
<a className="underline" href="https://www.youtube.com/watch?v=y-tLH0HzO8g&amp;feature=youtu.be&amp;t=314" target="_blank">Amateur Radio and ARDF in the USA (video)</a>
<br />
<a className="underline" href="http://www.homingin.com/intlfox.html">Two Decades of ARDF in the USA and Canada</a><br />
<a className="underline" href="http://www.homingin.com/joemoell/80intro.html">Try ARDF on 80 Meters</a>

      </div>
    </div>
      );
}
