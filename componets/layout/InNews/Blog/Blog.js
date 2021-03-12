import React from 'react'
import Navbar from '../../Navbar/BlueNavbar';
import Footer from '../../Footer/Footer';
import  { Section } from './Style';
import Image from 'next/image'
function Blog() {
    return (
        <div>
            <Navbar/>
            <Section>
             <div className="top" >
             <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613190590/AirJaldi/u1qeedb7atqtjak6mpqj.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
             </div>
            
            <div className='data' >
                <div className="left" >
       <h2>Google, Facebook and Microsoft race to get 1 billion Indians online</h2>
       <p>Mumbai, 00.00.00
Epeditation plam id quam qui ut omniend ipient pera denturesed quet est restiorumqui dolore
pa perum expe autae simusa udit eume cum hil mo odiciis ipsa alit a consequam hitatibus et
ut in. Vitatquo ssitas dolor audis ut pliberf ercius, sitaeserum natem. Niminte vit eicto expera
sedi odi suntiis eium, si sus reiustis enihitium eicitaquidit laboriste et et aut que aliqui aspieni
menit, ut et quam et ma sinis et la con porerspiet, volupta temolum rem eos renis solestr upta-
tio explit volupta dolum fuga. Facerro des eosapel et eum fugiatem que et estios ipsanitam qui
quam, quodi num ipicipi tiissit faccum as dolupicta veni officatio. Occus qui naturionsera dig-
nimporent volupta tiuntet, ut eligendio ex evercitata dolupta tatur? Ria acea et ommolup tatur,
sitatus corum explatia dolupta sanis nost, cus illandignis dia a dit magnitia vel mi, et lignatem
doluptibus volupiet quibearum escimporit odi autem reseque reptasit am exces ipsunt odit,
ommolorrovit volor sequiae eicium, omnit aut eum earum expliti quae.</p>
       <p>Ullis audae qui cum exces reperfe rumenistorae solupienist offic tem autem que labo. Ut aperi-
atus isint magniet oditatectias si quatus dolore velentium aut inci odis dolendelliti to voloribu-
sam nam, odit aut qui dolenis sitatque dolorem rem. Nequam quam qui am essequi asitatur
simolup tatentem quae velicip santur, quo ipiet adignis es dellaborerum invendios audipsa
ndebit, culparum at voluptasit, temquos dolorum id quamendunt dendit que niendit et qui
volorporem sape ommo tem inulla corehen dignis debis earciasi de mosseru ptatiis et velis dit
doluptur, sundanda demperatium eum iducide nisquiam velest fugia sequis as autem quam
ipsam qui aut eatis cum fuga. Icabo. Ecab iustem. Solupta ssinciis as remquiduciae nobis ent
verit, vellorro volesequi di sunt everspe remporest audam sam, imuscient asincium qui quis
dolum rerum estrumquunt, od mos eserior sam aut laniatium exero int rendi dendaec atiscias
dus es atur alibus, quunt esequam quiat quia diore eatur? Uptatem fugiaerum am niminctas
magnam, asped quo conestrum que occum intotaturem. Da dolupta dolendae sequam estrunt
quaspe sam, quae nimporum abor apernate nem quam, vendit porro ma volorrovidis aut vel-
latur, cullate volendit eos alique natiand usandi natempo receper natemolectia dolendan</p>

                </div>
                <div className="right" >

                    <div className="img" >
                    <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613451963/AirJaldi/odjjeta8wpc8nn2cwbit.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />

                    </div>
                    <div className="img" >
                    <Image
              className="myImage"
        src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1613451963/AirJaldi/odjjeta8wpc8nn2cwbit.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
                    </div>

                </div>
            </div>
             
            </Section>
            <Footer/>
        </div>
    )
}

export default Blog
