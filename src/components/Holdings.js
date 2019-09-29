import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer"

class Holdings extends Component {
    constructor(){
        super()
        this.state = {
            sideBarStatus: { properties: "", dashboard: "", holdings: "active" }
        }
    }
    render() {
        return (
            <>
            <Header cart={this.props.cart} loginState={this.props.loginState}/>
                            <div className="d-flex align-items-stretch">
                <SideBar sideBarStatus={this.state.sideBarStatus} />
                <div className="page-content">
                    <div className="page-header no-margin-bottom">
                        <div className="container-fluid">
                            <h2 className="h5 no-margin-bottom">Cart</h2>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">Holdings</li>
                        </ul>
                    </div>
                    <section className="no-padding-top">
  <div className="container-fluid">
    <div className="block">
      <div className="title"><strong>Data Table</strong></div>
      <div className="block-body">
        <div className="row">
          <div className="col-lg-6">
            <p>DataTables is a plug-in for the jQuery Javascript library. It is a highly flexible tool, based upon the foundations of progressive enhancement, and will add advanced interaction controls to any HTML table.</p>
            <p>Check out more at <a href="https://datatables.net/">https://datatables.net/</a>.</p>
          </div>
          <div className="col-lg-6">
            <p>How easy is it to use DataTables? Take a peek at the code below: a single function call to initialise the table is all it takes!</p>
            <pre><code>$(document).ready(function(){"{"}{"\n"}{"  "}$('#myTable').DataTable();{"\n"}{"}"});</code></pre>
          </div>
        </div>
        <div className="table-responsive">
          <table id="datatable1" style={{width: '100%'}} className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Orders</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Nielsen Cobb</a></td>
                <td>Memora</td>
                <td>nielsencobb@memora.com</td>
                <td>+1 (851) 552-2735</td>
                <td>Graniteville</td>
                <td>0</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Margret Cote</a></td>
                <td>Zilidium</td>
                <td>margretcote@zilidium.com</td>
                <td>+1 (893) 532-2218</td>
                <td>Foxworth</td>
                <td>2</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Rachel Vinson</a></td>
                <td>Chorizon</td>
                <td>rachelvinson@chorizon.com</td>
                <td>+1 (891) 494-2060</td>
                <td>Eastmont</td>
                <td>5</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Gabrielle Aguirre</a></td>
                <td>Comverges</td>
                <td>gabrielleaguirre@comverges.com</td>
                <td>+1 (805) 459-3869</td>
                <td>Whitewater</td>
                <td>0</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Spears Collier</a></td>
                <td>Remold</td>
                <td>spearscollier@remold.com</td>
                <td>+1 (910) 555-2436</td>
                <td>Hebron</td>
                <td>1</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Keisha Thomas</a></td>
                <td>Euron</td>
                <td>keishathomas@euron.com</td>
                <td>+1 (958) 405-3392</td>
                <td>Levant</td>
                <td>10</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Elisabeth Key</a></td>
                <td>Netagy</td>
                <td>elisabethkey@netagy.com</td>
                <td>+1 (900) 421-2096</td>
                <td>Nile</td>
                <td>0</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Patel Mack</a></td>
                <td>Zedalis</td>
                <td>patelmack@zedalis.com</td>
                <td>+1 (800) 460-2720</td>
                <td>Albrightsville</td>
                <td>2</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Erika Whitaker</a></td>
                <td>Uniworld</td>
                <td>erikawhitaker@uniworld.com</td>
                <td>+1 (911) 484-3333</td>
                <td>Leola</td>
                <td>8</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Meyers Swanson</a></td>
                <td>Candecor</td>
                <td>meyersswanson@candecor.com</td>
                <td>+1 (999) 404-3297</td>
                <td>Finderne</td>
                <td>3</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Townsend Sloan</a></td>
                <td>Rameon</td>
                <td>townsendsloan@rameon.com</td>
                <td>+1 (978) 563-2964</td>
                <td>Coultervillle</td>
                <td>8</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Millicent Henry</a></td>
                <td>Balooba</td>
                <td>millicenthenry@balooba.com</td>
                <td>+1 (863) 585-3988</td>
                <td>Caron</td>
                <td>9</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Madelyn Brock</a></td>
                <td>Combogene</td>
                <td>madelynbrock@combogene.com</td>
                <td>+1 (969) 508-2642</td>
                <td>Ballico</td>
                <td>1</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Jenkins Carney</a></td>
                <td>Dadabase</td>
                <td>jenkinscarney@dadabase.com</td>
                <td>+1 (901) 471-3581</td>
                <td>Chesterfield</td>
                <td>6</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Grimes Delaney</a></td>
                <td>Progenex</td>
                <td>grimesdelaney@progenex.com</td>
                <td>+1 (815) 514-2108</td>
                <td>Cazadero</td>
                <td>6</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Valencia Rivera</a></td>
                <td>Xleen</td>
                <td>valenciarivera@xleen.com</td>
                <td>+1 (969) 536-3595</td>
                <td>Kirk</td>
                <td>7</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Helene Solomon</a></td>
                <td>Zomboid</td>
                <td>helenesolomon@zomboid.com</td>
                <td>+1 (813) 456-2608</td>
                <td>Riverton</td>
                <td>6</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Kathleen Holman</a></td>
                <td>Hotcakes</td>
                <td>kathleenholman@hotcakes.com</td>
                <td>+1 (857) 406-2766</td>
                <td>Darlington</td>
                <td>10</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Merrill Garrett</a></td>
                <td>Affluex</td>
                <td>merrillgarrett@affluex.com</td>
                <td>+1 (996) 557-2069</td>
                <td>Utting</td>
                <td>8</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Sallie Booth</a></td>
                <td>Ziggles</td>
                <td>salliebooth@ziggles.com</td>
                <td>+1 (874) 556-2181</td>
                <td>Waiohinu</td>
                <td>0</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Doris Ward</a></td>
                <td>Imaginart</td>
                <td>dorisward@imaginart.com</td>
                <td>+1 (862) 495-2289</td>
                <td>Wyano</td>
                <td>2</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Lester Roach</a></td>
                <td>Applica</td>
                <td>lesterroach@applica.com</td>
                <td>+1 (884) 576-3361</td>
                <td>Coventry</td>
                <td>2</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Garza Shaw</a></td>
                <td>Capscreen</td>
                <td>garzashaw@capscreen.com</td>
                <td>+1 (970) 440-2019</td>
                <td>Beyerville</td>
                <td>10</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Charmaine Castro</a></td>
                <td>Naxdis</td>
                <td>charmainecastro@naxdis.com</td>
                <td>+1 (974) 551-3380</td>
                <td>Cotopaxi</td>
                <td>2</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Carey Petersen</a></td>
                <td>Telepark</td>
                <td>careypetersen@telepark.com</td>
                <td>+1 (892) 551-2169</td>
                <td>Lowell</td>
                <td>6</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Sargent Gray</a></td>
                <td>Orbean</td>
                <td>sargentgray@orbean.com</td>
                <td>+1 (828) 561-2635</td>
                <td>Allison</td>
                <td>2</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Dodson Goff</a></td>
                <td>Elentrix</td>
                <td>dodsongoff@elentrix.com</td>
                <td>+1 (817) 504-3865</td>
                <td>Wedgewood</td>
                <td>5</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Medina Ellison</a></td>
                <td>Glukgluk</td>
                <td>medinaellison@glukgluk.com</td>
                <td>+1 (936) 468-3118</td>
                <td>Rosburg</td>
                <td>4</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Tisha Velazquez</a></td>
                <td>Ginkogene</td>
                <td>tishavelazquez@ginkogene.com</td>
                <td>+1 (843) 547-2080</td>
                <td>Kapowsin</td>
                <td>1</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Young Bowers</a></td>
                <td>Shepard</td>
                <td>youngbowers@shepard.com</td>
                <td>+1 (847) 514-2567</td>
                <td>Eureka</td>
                <td>6</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">June Burgess</a></td>
                <td>Nipaz</td>
                <td>juneburgess@nipaz.com</td>
                <td>+1 (830) 533-3521</td>
                <td>Coinjock</td>
                <td>2</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Laurie Hobbs</a></td>
                <td>Entogrok</td>
                <td>lauriehobbs@entogrok.com</td>
                <td>+1 (953) 434-3211</td>
                <td>Bascom</td>
                <td>8</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">York Collins</a></td>
                <td>Lovepad</td>
                <td>yorkcollins@lovepad.com</td>
                <td>+1 (800) 425-2175</td>
                <td>Why</td>
                <td>10</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Kristen Foreman</a></td>
                <td>Geeky</td>
                <td>kristenforeman@geeky.com</td>
                <td>+1 (834) 470-3970</td>
                <td>Ola</td>
                <td>5</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Joy Holloway</a></td>
                <td>Homelux</td>
                <td>joyholloway@homelux.com</td>
                <td>+1 (974) 413-2782</td>
                <td>Watchtower</td>
                <td>1</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Huffman Frank</a></td>
                <td>Oatfarm</td>
                <td>huffmanfrank@oatfarm.com</td>
                <td>+1 (874) 484-2723</td>
                <td>Otranto</td>
                <td>6</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Britt Mcmillan</a></td>
                <td>Comtext</td>
                <td>brittmcmillan@comtext.com</td>
                <td>+1 (928) 510-2965</td>
                <td>Elliston</td>
                <td>1</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Kaitlin Bennett</a></td>
                <td>Peticular</td>
                <td>kaitlinbennett@peticular.com</td>
                <td>+1 (854) 536-2540</td>
                <td>Garnet</td>
                <td>8</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Pearlie Love</a></td>
                <td>Netplode</td>
                <td>pearlielove@netplode.com</td>
                <td>+1 (904) 552-2012</td>
                <td>Curtice</td>
                <td>10</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Sheryl Mcbride</a></td>
                <td>Recognia</td>
                <td>sherylmcbride@recognia.com</td>
                <td>+1 (899) 466-2830</td>
                <td>Boonville</td>
                <td>5</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Roach Snyder</a></td>
                <td>Baluba</td>
                <td>roachsnyder@baluba.com</td>
                <td>+1 (845) 410-3880</td>
                <td>Nicholson</td>
                <td>10</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Ruby Lynn</a></td>
                <td>Octocore</td>
                <td>rubylynn@octocore.com</td>
                <td>+1 (848) 486-2871</td>
                <td>Southview</td>
                <td>4</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Stafford Madden</a></td>
                <td>Mantrix</td>
                <td>staffordmadden@mantrix.com</td>
                <td>+1 (878) 465-3481</td>
                <td>Driftwood</td>
                <td>7</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Hickman Callahan</a></td>
                <td>Waab</td>
                <td>hickmancallahan@waab.com</td>
                <td>+1 (914) 583-3073</td>
                <td>Chamizal</td>
                <td>9</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Leticia Parks</a></td>
                <td>Melbacor</td>
                <td>leticiaparks@melbacor.com</td>
                <td>+1 (913) 509-2763</td>
                <td>Motley</td>
                <td>7</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Riggs Moody</a></td>
                <td>Lunchpad</td>
                <td>riggsmoody@lunchpad.com</td>
                <td>+1 (908) 583-2930</td>
                <td>Bordelonville</td>
                <td>4</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Katelyn Kirby</a></td>
                <td>Qualitex</td>
                <td>katelynkirby@qualitex.com</td>
                <td>+1 (842) 523-2257</td>
                <td>Waterview</td>
                <td>4</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Cox Melton</a></td>
                <td>Kraggle</td>
                <td>coxmelton@kraggle.com</td>
                <td>+1 (991) 412-2038</td>
                <td>Cecilia</td>
                <td>9</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Jeri Mcclain</a></td>
                <td>Lunchpod</td>
                <td>jerimcclain@lunchpod.com</td>
                <td>+1 (975) 413-2917</td>
                <td>Alafaya</td>
                <td>10</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Aisha Hawkins</a></td>
                <td>Quordate</td>
                <td>aishahawkins@quordate.com</td>
                <td>+1 (999) 514-2836</td>
                <td>Indio</td>
                <td>5</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Gayle Barr</a></td>
                <td>Kongle</td>
                <td>gaylebarr@kongle.com</td>
                <td>+1 (914) 572-2640</td>
                <td>Clarktown</td>
                <td>7</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Benson Beasley</a></td>
                <td>Rodeomad</td>
                <td>bensonbeasley@rodeomad.com</td>
                <td>+1 (860) 588-2920</td>
                <td>Cleary</td>
                <td>2</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Brandy Barrera</a></td>
                <td>Cemention</td>
                <td>brandybarrera@cemention.com</td>
                <td>+1 (843) 580-2154</td>
                <td>Warren</td>
                <td>10</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Shelby Ramsey</a></td>
                <td>Geekwagon</td>
                <td>shelbyramsey@geekwagon.com</td>
                <td>+1 (855) 533-2648</td>
                <td>Hanover</td>
                <td>4</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Cara Ball</a></td>
                <td>Isbol</td>
                <td>caraball@isbol.com</td>
                <td>+1 (874) 438-3616</td>
                <td>Wauhillau</td>
                <td>8</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Richmond Flores</a></td>
                <td>Bostonic</td>
                <td>richmondflores@bostonic.com</td>
                <td>+1 (919) 552-3946</td>
                <td>Carlton</td>
                <td>1</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Enid Freeman</a></td>
                <td>Emoltra</td>
                <td>enidfreeman@emoltra.com</td>
                <td>+1 (865) 574-3015</td>
                <td>Nettie</td>
                <td>7</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Lynn Cantrell</a></td>
                <td>Uxmox</td>
                <td>lynncantrell@uxmox.com</td>
                <td>+1 (968) 556-2447</td>
                <td>Goodville</td>
                <td>8</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Baird Powell</a></td>
                <td>Marketoid</td>
                <td>bairdpowell@marketoid.com</td>
                <td>+1 (807) 444-3857</td>
                <td>Calpine</td>
                <td>8</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Lara Finch</a></td>
                <td>Vitricomp</td>
                <td>larafinch@vitricomp.com</td>
                <td>+1 (977) 599-2083</td>
                <td>Chautauqua</td>
                <td>2</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Graves Richardson</a></td>
                <td>Amril</td>
                <td>gravesrichardson@amril.com</td>
                <td>+1 (823) 408-3828</td>
                <td>Echo</td>
                <td>7</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Strickland Charles</a></td>
                <td>Endicil</td>
                <td>stricklandcharles@endicil.com</td>
                <td>+1 (953) 417-2206</td>
                <td>Loretto</td>
                <td>5</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Ebony Allison</a></td>
                <td>Phormula</td>
                <td>ebonyallison@phormula.com</td>
                <td>+1 (817) 594-2728</td>
                <td>Englevale</td>
                <td>0</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Caroline Jacobson</a></td>
                <td>Protodyne</td>
                <td>carolinejacobson@protodyne.com</td>
                <td>+1 (939) 591-2009</td>
                <td>Dixonville</td>
                <td>2</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Lucile Strickland</a></td>
                <td>Iplax</td>
                <td>lucilestrickland@iplax.com</td>
                <td>+1 (898) 590-3071</td>
                <td>Juarez</td>
                <td>1</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">White Curry</a></td>
                <td>Lumbrex</td>
                <td>whitecurry@lumbrex.com</td>
                <td>+1 (893) 485-3129</td>
                <td>Eagleville</td>
                <td>10</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Eugenia Compton</a></td>
                <td>Solgan</td>
                <td>eugeniacompton@solgan.com</td>
                <td>+1 (851) 507-2738</td>
                <td>Brule</td>
                <td>5</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Wilda Dixon</a></td>
                <td>Kangle</td>
                <td>wildadixon@kangle.com</td>
                <td>+1 (940) 400-2013</td>
                <td>Eastvale</td>
                <td>0</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Noble Rojas</a></td>
                <td>Filodyne</td>
                <td>noblerojas@filodyne.com</td>
                <td>+1 (842) 484-3837</td>
                <td>Alderpoint</td>
                <td>6</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Barr Torres</a></td>
                <td>Zensure</td>
                <td>barrtorres@zensure.com</td>
                <td>+1 (874) 582-2466</td>
                <td>Fontanelle</td>
                <td>1</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Ila Hamilton</a></td>
                <td>Knowlysis</td>
                <td>ilahamilton@knowlysis.com</td>
                <td>+1 (807) 505-3069</td>
                <td>Herbster</td>
                <td>2</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Bridgett Church</a></td>
                <td>Junipoor</td>
                <td>bridgettchurch@junipoor.com</td>
                <td>+1 (880) 464-2710</td>
                <td>Franklin</td>
                <td>10</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Bender Graham</a></td>
                <td>Uncorp</td>
                <td>bendergraham@uncorp.com</td>
                <td>+1 (864) 442-3128</td>
                <td>Gilgo</td>
                <td>8</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Roth Chaney</a></td>
                <td>Xixan</td>
                <td>rothchaney@xixan.com</td>
                <td>+1 (976) 539-2002</td>
                <td>Nutrioso</td>
                <td>8</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Rhonda Dunn</a></td>
                <td>Maineland</td>
                <td>rhondadunn@maineland.com</td>
                <td>+1 (866) 535-2977</td>
                <td>Adelino</td>
                <td>4</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Wilcox Albert</a></td>
                <td>Lingoage</td>
                <td>wilcoxalbert@lingoage.com</td>
                <td>+1 (984) 413-2043</td>
                <td>Darrtown</td>
                <td>3</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Suarez Briggs</a></td>
                <td>Kage</td>
                <td>suarezbriggs@kage.com</td>
                <td>+1 (953) 593-2916</td>
                <td>Century</td>
                <td>0</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Casey Morse</a></td>
                <td>Netropic</td>
                <td>caseymorse@netropic.com</td>
                <td>+1 (880) 593-3845</td>
                <td>Summerfield</td>
                <td>0</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Karyn Pierce</a></td>
                <td>Inrt</td>
                <td>karynpierce@inrt.com</td>
                <td>+1 (932) 511-3982</td>
                <td>Loveland</td>
                <td>6</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Foster Trevino</a></td>
                <td>Sybixtex</td>
                <td>fostertrevino@sybixtex.com</td>
                <td>+1 (992) 443-2970</td>
                <td>Bladensburg</td>
                <td>8</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Barnett Hayes</a></td>
                <td>Aquamate</td>
                <td>barnetthayes@aquamate.com</td>
                <td>+1 (826) 571-2568</td>
                <td>Mapletown</td>
                <td>4</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Huber Kramer</a></td>
                <td>Kidstock</td>
                <td>huberkramer@kidstock.com</td>
                <td>+1 (864) 590-3714</td>
                <td>Dowling</td>
                <td>10</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Audra Glover</a></td>
                <td>Utarian</td>
                <td>audraglover@utarian.com</td>
                <td>+1 (941) 573-2538</td>
                <td>Wildwood</td>
                <td>6</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Ortega Noel</a></td>
                <td>Skybold</td>
                <td>orteganoel@skybold.com</td>
                <td>+1 (895) 547-2175</td>
                <td>Ypsilanti</td>
                <td>6</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Kaufman Lowe</a></td>
                <td>Zenolux</td>
                <td>kaufmanlowe@zenolux.com</td>
                <td>+1 (809) 508-2482</td>
                <td>Frierson</td>
                <td>8</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Michelle Cantu</a></td>
                <td>Norsup</td>
                <td>michellecantu@norsup.com</td>
                <td>+1 (872) 421-3650</td>
                <td>Macdona</td>
                <td>9</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Riley Knowles</a></td>
                <td>Accupharm</td>
                <td>rileyknowles@accupharm.com</td>
                <td>+1 (975) 494-3338</td>
                <td>Roderfield</td>
                <td>2</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Amelia Wall</a></td>
                <td>Ovium</td>
                <td>ameliawall@ovium.com</td>
                <td>+1 (821) 491-2806</td>
                <td>Hoehne</td>
                <td>8</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Woods Pacheco</a></td>
                <td>Konnect</td>
                <td>woodspacheco@konnect.com</td>
                <td>+1 (949) 495-3253</td>
                <td>Ellerslie</td>
                <td>10</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Gwen Turner</a></td>
                <td>Illumity</td>
                <td>gwenturner@illumity.com</td>
                <td>+1 (996) 471-2055</td>
                <td>Enoree</td>
                <td>2</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Watts Rivers</a></td>
                <td>Dentrex</td>
                <td>wattsrivers@dentrex.com</td>
                <td>+1 (998) 424-3302</td>
                <td>Avalon</td>
                <td>1</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Beth Ortega</a></td>
                <td>Orbaxter</td>
                <td>bethortega@orbaxter.com</td>
                <td>+1 (883) 505-3545</td>
                <td>Hollins</td>
                <td>4</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Wendy Jones</a></td>
                <td>Orbin</td>
                <td>wendyjones@orbin.com</td>
                <td>+1 (876) 529-3769</td>
                <td>Sterling</td>
                <td>2</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Valarie Mclean</a></td>
                <td>Gallaxia</td>
                <td>valariemclean@gallaxia.com</td>
                <td>+1 (939) 481-2070</td>
                <td>Blanford</td>
                <td>3</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Ola Frazier</a></td>
                <td>Futuris</td>
                <td>olafrazier@futuris.com</td>
                <td>+1 (969) 479-2251</td>
                <td>Retsof</td>
                <td>4</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Bettie Acevedo</a></td>
                <td>Uni</td>
                <td>bettieacevedo@uni.com</td>
                <td>+1 (893) 443-2816</td>
                <td>Silkworth</td>
                <td>9</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Ann Farley</a></td>
                <td>Atomica</td>
                <td>annfarley@atomica.com</td>
                <td>+1 (929) 553-3590</td>
                <td>Belfair</td>
                <td>6</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Best Santiago</a></td>
                <td>Pivitol</td>
                <td>bestsantiago@pivitol.com</td>
                <td>+1 (817) 553-3556</td>
                <td>Yonah</td>
                <td>8</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Head Dorsey</a></td>
                <td>Eargo</td>
                <td>headdorsey@eargo.com</td>
                <td>+1 (879) 516-3454</td>
                <td>Robinson</td>
                <td>2</td>
              </tr>
              <tr>
                <td><a href="javascript: return(void);" className="text-muted">Kelley Carey</a></td>
                <td>Tetak</td>
                <td>kelleycarey@tetak.com</td>
                <td>+1 (888) 443-3225</td>
                <td>Sharon</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

                </div>
                <Footer />
</div>
            </>
        );
    }
}

export default Holdings;
