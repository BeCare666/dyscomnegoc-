$(document).ready(function() {
    //window.location.href = "https://illicolove.com/under.html"
    // Configuration de i18next pour les différentes langues
    // Sélectionnez tous les éléments de la page
    $('.btn').click(function(){
      $('.mod-fond').show(40);
      });
      $('.close').click(function(){
      $('.mod-fond').hide(40);
      });
    const urlParams = new URLSearchParams(window.location.search);
    const selectedLanguagex = urlParams.get("lg");
     if(selectedLanguagex){
      localStorage.setItem('selectedLanguage', selectedLanguagex);
     }
    i18next.init({
      lng: localStorage.getItem('selectedLanguage') || 'en',
      debug: true, 
      resources: { 
        en: {       
          translation :  {
            "INDEXID1": "Home",
            "INDEXID2": "About",
            "INDEXID3": "Services",
            "INDEXID5": "Our Products",
            "INDEXID7": "Contact",
            "INDEXID8": "How does it work?",
            "INDEXID9": "The trading of <br> agricultural raw materials!",
            "INDEXID10": "Together towards ethical and sustainable trading.",
            "INDEXID11": `<a class="button button-lg button-shadow-4 button-secondary-2 button-zakaria" href="about.html" >About <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                    </a>`,
            "INDEXID12": "Pineapple",
            "INDEXID13": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1" data-bs-toggle="tab">Origin and Quality</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2" data-bs-toggle="tab">Selection</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3" data-bs-toggle="tab">Richness</a></li>`,
            "INDEXID14XXX": `                 <div class="tab-pane fade show active" id="tabs-1-1">
                            <p>The pineapples exported by Dyscom Negoce are grown in the fertile lands of West Africa,
                              known for producing high-quality, sweet, and juicy fruits, perfectly suited to international standards.</p>
                          </div>
                          <div class="tab-pane fade" id="tabs-1-2">
                            <p>Dyscom Negoce carefully selects each pineapple to ensure freshness and quality.
                              Modern preservation and packaging techniques help retain the natural flavors and nutritional properties during transport.</p>
                          </div>
                          <div class="tab-pane fade" id="tabs-1-3">
                            <p>Pineapple is rich in vitamin C, fiber, and antioxidants, and is appreciated for its numerous
                              health benefits. Dyscom Negoce ensures that the fruits reach customers while preserving
                               their optimal nutritional value, ready for consumption or processing.</p>
                          </div>`,
            "INDEXID15": "Hibiscus Flower",
            "INDEXID16": ` <li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1b" data-bs-toggle="tab">Produced in Africa</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2b" data-bs-toggle="tab">Uses</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3b" data-bs-toggle="tab">Benefits</a></li>`,
            "INDEXID17": ` <div class="tab-pane fade show active" id="tabs-1-1b">
                            <p>Bissap is grown in various regions of Africa, especially in West Africa, where
                              the climate is ideal for producing this colorful and flavorful flower.
                              Dyscom Negoce works directly with local producers to provide optimal quality.</p>
                          </div>
                          <div class="tab-pane fade" id="tabs-1-2b">
                            <p>The hibiscus flower is used to make refreshing drinks, very popular in Africa and worldwide,
                              for its tangy flavor and hydrating effects.
                              It is also prized in health and beauty products for its antioxidant properties.</p>
                          </div>
                          <div class="tab-pane fade" id="tabs-1-3b">
                            <p>Bissap is rich in vitamin C and antioxidants, making it a natural drink
                              to boost the immune system and reduce hypertension. Dyscom Negoce ensures that
                              the flowers are treated in a way that preserves these benefits for international customers.</p>
                          </div>`,
                          "INDEXID18": "Palm kernel",
    "INDEXID19": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1n" data-bs-toggle="tab">Richness</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2n" data-bs-toggle="tab">Process</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3n" data-bs-toggle="tab">Uses</a></li>`,
    "INDEXID21X": `<div class="tab-pane fade show active" id="tabs-1-1n">
                    <p>Palm kernel is the seed contained in the fruit of the oil palm. It is rich in palm kernel oil, a sought-after product for its content of saturated and unsaturated fatty acids, used in the food, cosmetics, and industrial applications industries.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-2n">
                    <p>At Dyscom Negoce, palm kernels are carefully selected and processed to ensure a high-quality oil. This process yields a pure, quality product suited to the needs of international industries.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-3n">
                    <p>After oil extraction, the residue, known as palm kernel cake, is used as livestock feed due to its protein and fiber richness. Dyscom Negoce maximizes the palm kernel's value, contributing to more sustainable production.</p>
                  </div>`,
    "INDEXID21": "Cuttlefish bone",
    "INDEXID22": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1l" data-bs-toggle="tab">Essential Minerals</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2l" data-bs-toggle="tab">Uses</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3l" data-bs-toggle="tab">Natural Product</a></li>`,
    "INDEXID22X": `<div class="tab-pane fade show active" id="tabs-1-1l">
                    <p>Cuttlefish bone is a natural source of calcium and minerals, making it an ideal dietary supplement for animals, especially birds and reptiles. At Dyscom Negoce, cuttlefish bones are carefully selected to offer a nutrient-rich product.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-2l">
                    <p>Primarily used in bird breeding, cuttlefish bone helps sharpen birds' beaks while providing calcium to strengthen their bones. It is also beneficial for reptiles needing minerals for growth and health.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-3l">
                    <p>Cuttlefish bone is a natural product derived from cuttlefish shells. By utilizing this ingredient, Dyscom Negoce supports sustainable marine resource usage, offering products that meet various industry needs.</p>
                  </div>`,
    "INDEXID24": "Shea Butter",
    "INDEXID25": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1bb" data-bs-toggle="tab">Source</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2bb" data-bs-toggle="tab">Benefits</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3bb" data-bs-toggle="tab">Uses</a></li>`,
    "INDEXID26": `<div class="tab-pane fade show active" id="tabs-1-1bb">
                    <p>Shea butter is extracted from the nuts of the shea tree, primarily cultivated in West Africa. Dyscom Negoce sources shea directly from local producers to guarantee high-quality products, supporting local communities and preserving sustainable practices.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-2bb">
                    <p>Known for its moisturizing properties, shea butter is highly valued in skin and hair care. It is rich in vitamins A, E, and F and has anti-inflammatory and regenerative qualities, making it a key ingredient in many natural beauty products.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-3bb">
                    <p>Beyond cosmetics, shea butter is used in food and pharmaceutical manufacturing. Dyscom Negoce processes shea butter to meet international standards, making it ready for use across industries worldwide.</p>
                  </div>`,

                  "INDEXID27": "Our Commitment",
    "INDEXID28": `<h4 class="box-icon-classic-title"><a href="#">Quality</a></h4>
                  <p class="box-icon-classic-text">We carefully select our raw materials to ensure products of exceptional quality.</p>`,
    "INDEXID29": `<h4 class="box-icon-classic-title"><a href="#">Ethics</a></h4>
                  <p class="box-icon-classic-text">Our business practices promote a responsible and sustainable approach, respecting the environment and people.</p>`,
    "INDEXID30": `<h4 class="box-icon-classic-title"><a href="#">Innovation</a></h4>
                  <p class="box-icon-classic-text">By partnering with international partners, we explore new ways to use African products across various sectors.</p>`,
    "INDEXID31": `<h4 class="box-icon-classic-title"><a href="#">Transparency</a></h4>
                  <p class="box-icon-classic-text">We prioritize clear and honest communication at every step, ensuring a trusting relationship with our partners and clients.</p>`,
    "INDEXID30V": "Dyscom Negoce: Africa at the heart of your trade, the world within reach.",
    "INDEXID31V": "Products",
    "INDEXID32": "4 Sides",
    "INDEXID33": "Miracle Berries",
    "INDEXID34": "Djeka Leaves",
    "INDEXID34V": "Nep Nep",
    "INDEXID35": "Vetiver Roots",
    "INDEXID36": "Palm Kernel Shell",
    "INDEXID37": "Palm Oil",
    "INDEXID38": "Bananas",
    "INDEXID39": "Valuing Africa's treasures, together towards ethical and sustainable trade.",
    "INDEXID40": "Continents",
    "INDEXID41": "Countries",
    "INDEXID42": "Satisfied Clients",
    "INDEXID43": "Partners",
    "INDEXID44": "Pineapples",
    "INDEXID45": "What types of raw materials do you offer for export?",
    "INDEXID46": "We offer a variety of raw African products, including red palm oil, palm kernel shells, nep nep, banana, pineapple, ginger, bissap (hibiscus flower), and many other authentic raw materials.",
    "INDEXID47": "What are the minimum and maximum order quantities?",
    "INDEXID48": "We adapt to each client’s needs, whether for small quantities for testing or bulk orders. Our teams can inform you of specific thresholds based on the products requested.",
    "INDEXID49": "How do you ensure the quality of exported products?",
    "INDEXID50": "All our products undergo rigorous quality control to ensure they meet international standards. We work with trusted suppliers and use laboratories to test our raw materials to ensure their authenticity and quality.",
    "INDEXID51": "What are the delivery times and conditions?",
    "yearTab-tab": "Delivery times depend on the destination and products ordered. We offer flexible transport options and work with reliable carriers to ensure safe shipping in the shortest possible time.",
    "monthTab-tab": `<h5 class="box-icon-creative-title"><a href="#">Free Delivery</a></h5>
                     <p class="box-icon-creative-text">Our fast and free delivery</p>`,
    "weekTab-tab": `<h5 class="box-icon-creative-title"><a href="#">Customer Service</a></h5>
                    <p class="box-icon-creative-text">Always ready to help you</p>`,
    "INDEXID55": `<h5 class="box-icon-creative-title"><a href="#">Global Markets</a></h5>
                  <p class="box-icon-creative-text">Meeting global market requirements</p>`,
    "INDEXID56": "Our Services",
    "INDEXID57": `<h5 class="post-classic-title"><a href="">Raw Material Export</a></h5>
                  <p class="post-classic-text">We provide a wide range of high-quality African raw materials, suited to the needs of various industrial and commercial sectors worldwide.</p>`,
    "INDEXID58": `<h5 class="post-classic-title"><a href="">Logistics and Transport Management</a></h5>
                  <p class="post-classic-text">With our expertise in international logistics, we coordinate each step of shipping, from Africa to the final destination, ensuring efficient and secure delivery.</p>`,
    "loanStartDate": `<h5 class="post-classic-title"><a href="">Quality Assurance and Compliance</a></h5>
                      <p class="post-classic-text">Our raw materials undergo strict quality controls to ensure they meet international standards, providing clients with reliable and authentic products.</p>`,
    "loanEndDate": "Hibiscus Flower",
    "INDEXID59": "Quick Links",

    "INDEXID60": `<li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="#ervices">Services</a></li>
    <li><a href="#Les_Produits">Our Products</a></li>
    <li><a href="#faq">FAQ</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="what.html">How it Works?</a></li>`,
"INDEXID61": "Get in touch",
"INDEXID62": "The new generation.",
"INDEXID63": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1" data-bs-toggle="tab">About</a></li>
    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2" data-bs-toggle="tab">Our Mission</a></li>
    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3" data-bs-toggle="tab">Our Goals</a></li>`,
"INDEXID64": `<div class="tab-pane fade show active" id="tabs-1-1">
      <p>Dyscom Negoce is an international trading platform specializing in the export of African raw materials 
         to global markets. Based in Africa, Dyscom Negoce positions itself as a key player in international trade of natural products and raw materials, 
         combining quality, authenticity, and adherence to international standards.</p>
    </div>
    <div class="tab-pane fade" id="tabs-1-2">
      <p>Our mission is to promote Africa's natural resources on the international stage, 
         while supporting local communities and fostering sustainable growth. We value a responsible approach to trade, ensuring an ethical supply chain that 
         respects local resources and the well-being of producers.</p>
    </div>
    <div class="tab-pane fade" id="tabs-1-3">
      <p>Our goal is to become a trusted partner in international trade, 
         showcasing Africa’s wealth. We aim to provide high-quality raw materials from 
         sustainable African sources, 
         while adhering to international standards and meeting each client’s needs.</p>
    </div>`,
"INDEXID65": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
    </svg> Go to Home`,
"INDEXID66": "About",
"INDEXID67": "About",
"INDEXID68": "Subscribe to our newsletter to receive weekly updates, special offers, and exclusive discounts.",
    "accountId": "Enter your email",
    "INDEXID69": `<div class="col-sm-6 col-lg-3">
                    <article class="box-icon-modern">
                      <div class="box-icon-modern-header">
                        <div class="box-icon-modern-count box-ordered-item"></div>
                        <div class="box-icon-modern-icon fas fa-envelope"></div>
                      </div>
                      <h4 class="box-icon-modern-title"><a href="#">Contact</a></h4>
                      <p class="box-icon-modern-text">The client contacts us through our website, email, or phone to express their specific raw material needs (quantity, quality, specifications). At this stage, we listen and advise the client to better understand their expectations and present available options.</p>
                    </article>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <article class="box-icon-modern">
                      <div class="box-icon-modern-header">
                        <div class="box-icon-modern-count box-ordered-item"></div>
                        <div class="box-icon-modern-icon fas fa-handshake"></div>
                      </div>
                      <h4 class="box-icon-modern-title"><a href="#">Custom Proposal</a></h4>
                      <p class="box-icon-modern-text">After gathering the necessary details, our team creates a tailored business proposal for the client, including pricing, delivery timelines, and terms. We also answer any questions to ensure the client is fully informed before making a decision.</p>
                    </article>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <article class="box-icon-modern">
                      <div class="box-icon-modern-header">
                        <div class="box-icon-modern-count box-ordered-item"></div>
                        <div class="box-icon-modern-icon fas fa-thumbs-up"></div>
                      </div>
                      <h4 class="box-icon-modern-title"><a href="#">Quality Verification</a></h4>
                      <p class="box-icon-modern-text">If necessary, we can provide product samples for the client to assess the quality. This step ensures that the raw materials meet the client's expectations before order confirmation.</p>
                    </article>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <article class="box-icon-modern">
                      <div class="box-icon-modern-header">
                        <div class="box-icon-modern-count box-ordered-item"></div>
                        <div class="box-icon-modern-icon fas fa-clipboard-check"></div>
                      </div>
                      <h4 class="box-icon-modern-title"><a href="#">Order Confirmation</a></h4>
                      <p class="box-icon-modern-text">Once the proposal is approved and the terms accepted, the client places the order. We then proceed with logistical and administrative preparations to ship the products, ensuring secure delivery and adherence to agreed timelines.</p>
                    </article>
                  </div>`,
                  "INDEXID70": `<h2 class="section-title"><i class="fas fa-gavel icon"></i> Terms and Conditions</h2>
                  <p>Welcome to Dyscom Negoce! By accessing and using this site, you agree to the following terms and conditions:</p>
                  <ul class="list-unstyled">
                      <li class="list-item"><i class="fas fa-user-check icon"></i><strong>Use of the Site:</strong> You must use this site in accordance with applicable laws and the general terms of Dyscom Negoce.</li>
                      <li class="list-item"><i class="fas fa-lock icon"></i><strong>Privacy:</strong> Your personal information is protected and processed according to our privacy policy.</li>
                      <li class="list-item"><i class="fas fa-handshake icon"></i><strong>User Commitments:</strong> Users must provide accurate information and not infringe the rights of third parties.</li>
                      <li class="list-item"><i class="fas fa-exchange-alt icon"></i><strong>Modifications:</strong> We reserve the right to modify these terms at any time.</li>
                  </ul>
                  
                  <h2 class="section-title"><i class="fas fa-user-secret icon"></i> Privacy Policy</h2>
                  <p>At Dyscom Negoce, we take the privacy of your personal information seriously. Here are the main points of our policy:</p>
                  <ul class="list-unstyled">
                      <li class="list-item"><i class="fas fa-user-shield icon"></i><strong>Information Collection:</strong> We collect the necessary information to provide a better user experience.</li>
                      <li class="list-item"><i class="fas fa-user-lock icon"></i><strong>Data Protection:</strong> We use security measures to protect your information from unauthorized access.</li>
                      <li class="list-item"><i class="fas fa-database icon"></i><strong>Use of Data:</strong> Your data is used solely for business purposes and is not shared without your consent.</li>
                      <li class="list-item"><i class="fas fa-user-times icon"></i><strong>Data Deletion:</strong> You can request the deletion of your data at any time by contacting us.</li>
                  </ul>`
          }
  
        },
        fr:{
          translation : {
            "INDEXID1": "Accueil",
            "INDEXID2": "À propos",
            "INDEXID3": "Services", 
            "INDEXID5": "Nos Produits", 
            "INDEXID7": "Contact",
            "INDEXID8": "Comment ça marche ?",
            "INDEXID9": "Le négoce des <br> matières premières agricoles !",
            "INDEXID10": "Ensemble vers un négoce éthique et durable.",
            "INDEXID11": `<a class="button button-lg button-shadow-4 button-secondary-2 button-zakaria" href="about.html" >À propos <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg>
            </a>`,
            "INDEXID12": "L'ananas",
            "INDEXID13": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1" data-bs-toggle="tab">Origine et Qualité </a></li>
            <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2" data-bs-toggle="tab">Sélection  </a></li>
            <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3" data-bs-toggle="tab">Richesse</a></li>`,
            "INDEXID14XXX": `                 <div class="tab-pane fade show active" id="tabs-1-1">
                    <p>Les ananas exportés par Dyscom Negoce sont cultivés dans les terres fertiles d'Afrique de l'Ouest, 
                      connues pour produire 
                      des fruits de grande qualité, sucrés et juteux, parfaitement adaptés aux normes internationales.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-2">
                    <p>Dyscom Negoce sélectionne soigneusement chaque ananas pour garantir leur fraîcheur et leur qualité. 
                      Des techniques de conservation et d'emballage modernes 
                      permettent de préserver les saveurs naturelles et les propriétés nutritionnelles pendant le transport.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-3">
                    <p>L’ananas est riche en vitamines C, fibres et antioxydants, et est apprécié pour ses nombreux 
                      bienfaits sur la santé. Dyscom Negoce s'assure que les fruits atteignent les clients en conservant
                       leur valeur nutritionnelle optimale, prêts pour la consommation ou la transformation.</p>
                  </div>`,
            "INDEXID15": "Fleur d'hibiscus",
            "INDEXID16": ` <li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1b" data-bs-toggle="tab">Produit en Afrique</a></li>
            <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2b" data-bs-toggle="tab">Utilisations  </a></li>
            <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3b" data-bs-toggle="tab">Bienfaits </a></li>`,
            "INDEXID17": ` <div class="tab-pane fade show active" id="tabs-1-1b">
                    <p>Le bissap est cultivé dans diverses régions d’Afrique, notamment en Afrique de l’Ouest, où le 
                      climat est idéal pour la production de cette fleur riche en couleur et en saveur. 
                      Dyscom Negoce travaille directement avec des producteurs locaux pour fournir une qualité optimale.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-2b">
                    <p>La fleur d’hibiscus est utilisée pour fabriquer des boissons rafraîchissantes, très populaires en Afrique et dans le monde entier, 
                      pour sa saveur acidulée et ses effets hydratants. 
                      Elle est également prisée dans des produits de santé et de beauté, grâce à ses propriétés antioxydantes.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-3b">
                    <p>Le bissap est riche en vitamine C et en antioxydants, ce qui en fait une boisson naturelle 
                      pour renforcer le système immunitaire et réduire l’hypertension. Dyscom Negoce veille à ce 
                      que les fleurs soient traitées de manière à conserver ces bienfaits pour ses clients internationaux.</p>
                  </div>`,

            "INDEXID18": "Noix de palmiste",
            "INDEXID19": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1n" data-bs-toggle="tab">Richesse </a></li>
            <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2n" data-bs-toggle="tab">Processus  </a></li>
            <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3n" data-bs-toggle="tab">Utilisations</a></li>`,
            "INDEXID21X": `<div class="tab-pane fade show active" id="tabs-1-1n">
                    <p>La noix de palmiste est la graine contenue dans le fruit du palmier à huile. Elle est riche en 
                      huile de palmiste, un produit prisé pour sa teneur en acides gras saturés et insaturés, 
                      utilisée dans l'industrie alimentaire, cosmétique et pour des applications industrielles.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-2n">
                    <p> Chez Dyscom Negoce, les noix de palmiste sont soigneusement sélectionnées et traitées pour 
                      garantir une qualité élevée de l'huile extraite. Ce processus 
                      permet d'obtenir un produit pur et de qualité, adapté aux besoins des industries internationales.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-3n">
                    <p>Après extraction de l'huile, le résidu, appelé tourteau de palmiste, est utilisé comme 
                      aliment pour le bétail en raison de sa richesse en protéines et en fibres. Dyscom Negoce valorise 
                      ainsi toutes les parties de la noix de palmiste, contribuant à une production plus durable.</p>
                  </div>`,
            "INDEXID21": "L'os de seiche",
            "INDEXID22": ` <li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1l" data-bs-toggle="tab">Minéraux Essentiels </a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2l" data-bs-toggle="tab">Utilisation </a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3l" data-bs-toggle="tab">Produit Naturel</a></li>`,
            "INDEXID22X": `<div class="tab-pane fade show active" id="tabs-1-1l">
                    <p>L'os de seiche est une source naturelle de calcium et de minéraux, ce qui en fait un complément 
                      idéal pour l'alimentation des animaux, notamment des oiseaux et des reptiles. Chez Dyscom Negoce, 
                      les os de seiche sont soigneusement sélectionnés pour offrir un produit riche en nutriments.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-2l">
                    <p>Principalement utilisé dans les élevages d'oiseaux, l’os de seiche permet d’aiguiser 
                      le bec des oiseaux tout en leur fournissant du calcium pour renforcer leur ossature. 
                      Il est également 
                      utilisé pour les reptiles qui bénéficient des minéraux pour leur croissance et santé.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-3l">
                    <p>L'os de seiche est un produit naturel provenant des coquilles de seiches. 
                      En valorisant cet ingrédient, Dyscom Negoce contribue à une utilisation complète des 
                      ressources marines, en soutenant une 
                      approche durable et en proposant des produits qui répondent aux besoins de diverses industries.</p>
                  </div>`,
            "INDEXID24": "Beurre de karité",
            "INDEXID25": ` <li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1bb" data-bs-toggle="tab">Source </a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2bb" data-bs-toggle="tab">Vertus </a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3bb" data-bs-toggle="tab">Utilisations </a></li>`,
            "INDEXID26": `<div class="tab-pane fade show active" id="tabs-1-1bb">
                    <p>Le beurre de karité provient des noix de l’arbre de karité, principalement cultivé en 
                      Afrique de l'Ouest. Dyscom Negoce s’approvisionne en karité directement auprès de producteurs 
                      locaux pour garantir un produit de haute qualité, tout en soutenant les 
                      communautés locales et en préservant les pratiques durables.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-2bb">
                    <p>Reconnu pour ses propriétés hydratantes, le beurre de karité est très apprécié dans 
                      les soins de la peau et des cheveux. Il est riche en vitamines A, E, et F, et possède des qualités anti-inflammatoires et régénérantes, 
                      en faisant un ingrédient clé dans de nombreux produits de beauté naturels.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-3bb">
                    <p>Au-delà de la cosmétique, le beurre de karité est utilisé dans la fabrication de produits 
                      alimentaires et pharmaceutiques. Chez Dyscom Negoce, le beurre de karité est traité pour répondre aux 
                      normes internationales, le rendant prêt à l'emploi pour diverses industries dans le monde entier.</p>
                  </div>`,


            "INDEXID27": "Notre Engagement",
            "INDEXID28": ` <h4 class="box-icon-classic-title"><a href="#">Qualité </a></h4>
                        <p class="box-icon-classic-text">Nous sélectionnons nos matières premières avec soin pour assurer des produits de qualité exceptionnelle.</p>`,
            "INDEXID29": ` <h4 class="box-icon-classic-title"><a href="#">Éthique </a></h4>
                        <p class="box-icon-classic-text">Nos pratiques commerciales favorisent une approche responsable et durable, respectant l'environnement et les personnes.</p>`,
            "INDEXID30": `<h4 class="box-icon-classic-title"><a href="#">Innovation </a></h4>
                        <p class="box-icon-classic-text">En collaborant avec des partenaires internationaux, nous explorons de nouvelles façons d'utiliser les produits africains dans divers secteurs.</p>`,
            "INDEXID31": ` <h4 class="box-icon-classic-title"><a href="#">Transparence</a></h4>
                        <p class="box-icon-classic-text">Nous privilégions une communication claire et honnête à chaque étape, assurant une relation de confiance avec nos partenaires et clients.</p>`,
            "INDEXID30V": "Dyscom Negoce : l'Afrique au cœur de vos échanges, le monde à portée de main.",
            "INDEXID31V": "Les Produits",
            "INDEXID32": "4 Côtés",
            "INDEXID33": "Baies de miracle",
            "INDEXID34": "Feuilles de djeka",
            "INDEXID34V": "Le nep nep",
            "INDEXID35": "Racines de vetiver",
            "INDEXID36": `Coque de palmiste`,
            "INDEXID37": "Huile de Palme",
            "INDEXID38": "Les Bananes",
            "INDEXID39": `Valorisons les trésors de l'Afrique, ensemble vers un négoce éthique et durable.`,
            "INDEXID40": `Continents`,
            "INDEXID41": `Pays`,
            "INDEXID42": `Clients Satisfaits`,
            "INDEXID43": `Parténaires`,
            "INDEXID44": ` Ananas`,
            "INDEXID45": `Quels types de matières premières proposez-vous à l’exportation ? `,
            "INDEXID46": `Nous proposons une variété de produits africains bruts, notamment l’huile rouge de palme, les coques de noix de palmiste, le nep nep, la banane, l'ananas, le gingembre, le bissap (fleur d’hibiscus), et bien d'autres matières premières authentiques.`,
            "INDEXID47": `Quelles sont les quantités minimales et maximales de commande ?`,
            "INDEXID48": `Nous nous adaptons aux besoins de chaque client, qu'il s'agisse de petites quantités pour des tests ou de commandes en vrac. Nos équipes peuvent vous informer des seuils spécifiques selon les produits demandés.`,
            "INDEXID49": `Comment assurez-vous la qualité des produits exportés ?`,
            "INDEXID50": `Tous nos produits passent par un contrôle de qualité rigoureux pour garantir qu'ils respectent les normes internationales. Nous travaillons avec des fournisseurs de confiance et utilisons des laboratoires pour tester nos matières premières,
             afin d’assurer leur authenticité et leur qualité.`,
            "INDEXID51": `Quels sont les délais et les modalités de livraison ?`,
            "yearTab-tab": `Les délais de livraison dépendent de la destination et des produits commandés. Nous offrons des options de transport flexibles et collaborons 
            avec des transporteurs fiables pour assurer une expédition sécurisée dans les meilleurs délais.`,
            "monthTab-tab": `<h5 class="box-icon-creative-title"><a href="#">Livraison gratuite</a></h5>
                        <p class="box-icon-creative-text">Notre livraison rapide et gratuite</p> <p>`,
            "weekTab-tab": `<h5 class="box-icon-creative-title"><a href="#">Service à la clientèle</a></h5>
                        <p class="box-icon-creative-text">Toujours prêt à vous aider</p>`,
            "INDEXID55": `<h5 class="box-icon-creative-title"><a href="#">Marchés mondiaux</a></h5>
                        <p class="box-icon-creative-text">Répondre aux exigences des marchés mondiaux</p>`,
            "INDEXID56": `Nos services`,
            "INDEXID57": `<h5 class="post-classic-title"><a href="">Exportation de Matières Premières</a></h5>
                <p class="post-classic-text">Nous fournissons une large gamme de matières premières africaines de qualité, 
                adaptées aux besoins de divers secteurs industriels et commerciaux à travers le monde.</p>`,
            "INDEXID58": `<h5 class="post-classic-title"><a href="">Gestion Logistique et Transport</a></h5>
                <p class="post-classic-text">Grâce à notre expertise en logistique internationale, nous coordonnons chaque étape de l’expédition, depuis l’Afrique jusqu'à la destination finale, en assurant une livraison efficace et sécurisée.</p>`,
            "loanStartDate": `<h5 class="post-classic-title"><a href="">Assurance Qualité et Conformité.</a></h5>
                <p class="post-classic-text">Nos matières premières sont soumises à des contrôles de qualité rigoureux pour garantir leur conformité aux normes internationales, assurant ainsi aux clients des produits fiables et authentiques.</p>`,
            "loanEndDate": `Fleur d'hibiscus`, 
            "INDEXID59": `Liens rapides`,


            "INDEXID60":  ` <li><a href="index.html">Accueil</a></li>
                  <li><a href="about.html">À propos </a></li>
                  <li><a href="#ervices">Services </a></li>
                  <li><a href="#Les_Produits">Nos Produits </a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="contact.html">Contact </a></li>
                  <li><a href="what.html">Comment ça marche ?</a></li> `,
            "INDEXID61": `Prendre contact`,

            "INDEXID62": `La nouvelle génération.`,
            "INDEXID63": ` <li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1" data-bs-toggle="tab">À propos</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2" data-bs-toggle="tab">Notre mission</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3" data-bs-toggle="tab">Nos objectifs</a></li>`,
            "INDEXID64": `<div class="tab-pane fade show active" id="tabs-1-1">
                        <p>Dyscom Negoce est une plateforme de négoce international spécialisée dans l'exportation de matières premières africaines 
                            vers les marchés mondiaux. Basée en Afrique, Dyscom Negoce se positionne comme un acteur clé dans le commerce international de produits naturels et de matières premières, 
                            alliant qualité, authenticité et respect des normes internationales.</p>
                      </div>
                      <div class="tab-pane fade" id="tabs-1-2">
                        <p>Notre mission est de promouvoir les richesses naturelles de l'Afrique sur la scène 
                            internationale, tout en soutenant les communautés locales et en favorisant une croissance durable. 
                            Nous valorisons une approche responsable du commerce, en assurant une chaîne d'approvisionnement éthique qui 
                            respecte les ressources locales et le bien-être des producteurs.</p>
                      </div>
                      <div class="tab-pane fade" id="tabs-1-3">
                        <p>Notre objectif est de devenir un partenaire de confiance dans le négoce international, 
                            en mettant en avant les richesses de l'Afrique. Nous visons à fournir des matières premières de 
                            haute qualité provenant de sources africaines durables, 
                            tout en respectant les normes internationales et les besoins de chaque client.</p>
                      </div> `,
            "INDEXID65": `  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
                  </svg> Aller à l'Accueil`,
            "INDEXID66": `À propos`,
            "INDEXID67": `À propos`,
            "INDEXID68": `Abonnez-vous à notre lettre d'information pour recevoir chaque semaine des nouvelles, des mises à jour, des offres spéciales et des réductions exclusives.`,
            "accountId": `Entrez votre e-mail`, 
            "INDEXID69": `            <div class="col-sm-6 col-lg-3">
              <article class="box-icon-modern">
                <div class="box-icon-modern-header">
                  <div class="box-icon-modern-count box-ordered-item"></div>
                  <div class="box-icon-modern-icon fas fa-envelope"></div>
                </div>
                <h4 class="box-icon-modern-title"><a href="#">Prise de Contact</a></h4>
                <p class="box-icon-modern-text">Le client nous contacte via notre site web, par email, ou par 
                    téléphone pour exprimer ses besoins spécifiques en matières premières (quantité, qualité, 
                    spécifications). À cette étape, nous écoutons et conseillons 
                    le client pour mieux cerner ses attentes et lui présenter les options disponibles.</p>
              </article>
            </div>
            <div class="col-sm-6 col-lg-3">
              <article class="box-icon-modern">
                <div class="box-icon-modern-header">
                  <div class="box-icon-modern-count box-ordered-item"></div>
                  <div class="box-icon-modern-icon fas fa-handshake"></div>
                </div>
                <h4 class="box-icon-modern-title"><a href="#">Proposition Personnalisée</a></h4>
                <p class="box-icon-modern-text">Après avoir recueilli les détails nécessaires, notre équipe 
                    élabore une proposition commerciale adaptée aux besoins du client, incluant les prix, les délais, 
                    et les conditions de livraison. Nous répondons également aux 
                    questions pour garantir que le client est pleinement informé avant toute décision.</p>
              </article>
            </div>
            <div class="col-sm-6 col-lg-3">
              <article class="box-icon-modern">
                <div class="box-icon-modern-header">
                  <div class="box-icon-modern-count box-ordered-item"></div>
                  <div class="box-icon-modern-icon fas fa-thumbs-up"></div>
                </div>
                <h4 class="box-icon-modern-title"><a href="#">Validation de Qualité</a></h4>
                <p class="box-icon-modern-text">Si nécessaire, nous pouvons fournir des échantillons de produits 
                    pour que le client puisse évaluer la qualité. Cette étape assure que 
                    les matières premières correspondent aux attentes du client avant la confirmation de commande.</p>
              </article>
            </div>
            <div class="col-sm-6 col-lg-3">
              <article class="box-icon-modern">
                <div class="box-icon-modern-header">
                  <div class="box-icon-modern-count box-ordered-item"></div>
                  <div class="box-icon-modern-icon fas fa-clipboard-check"></div>
                </div>
                <h4 class="box-icon-modern-title"><a href="#">Confirmation de Commande</a></h4>
                <p class="box-icon-modern-text">Une fois la proposition validée et les conditions acceptées, 
                    le client passe sa commande. Nous procédons alors aux préparations logistiques et administratives 
                    pour expédier les produits, 
                    en garantissant une livraison sécurisée et dans les délais convenus.</p>
              </article>
            </div>`, 


            "INDEXID70": `  <h2 class="section-title"><i class="fas fa-gavel icon"></i> Termes et Conditions</h2>
            <p>Bienvenue sur Dyscom Negoce ! En accédant et en utilisant ce site, vous acceptez nos termes et conditions suivants :</p>
            
            <ul class="list-unstyled">
                <li class="list-item"><i class="fas fa-user-check icon"></i><strong>Utilisation du Site :</strong> Vous devez utiliser ce site conformément aux lois en vigueur et aux conditions générales de Dyscom Negoce.</li>
                <li class="list-item"><i class="fas fa-lock icon"></i><strong>Confidentialité :</strong> Vos informations personnelles sont protégées et traitées selon notre politique de confidentialité.</li>
                <li class="list-item"><i class="fas fa-handshake icon"></i><strong>Engagements des Utilisateurs :</strong> Les utilisateurs doivent fournir des informations exactes et ne pas enfreindre les droits de tiers.</li>
                <li class="list-item"><i class="fas fa-exchange-alt icon"></i><strong>Modifications :</strong> Nous nous réservons le droit de modifier ces conditions à tout moment.</li>
            </ul>

            <!-- Politique de Confidentialité Section -->
            <h2 class="section-title"><i class="fas fa-user-secret icon"></i> Politique de Confidentialité</h2>
            <p>Chez Dyscom Negoce, nous prenons la confidentialité de vos informations personnelles au sérieux. Voici les points principaux de notre politique :</p>
            
            <ul class="list-unstyled">
                <li class="list-item"><i class="fas fa-user-shield icon"></i><strong>Collecte d'Informations :</strong> Nous collectons les informations nécessaires pour offrir une meilleure expérience utilisateur.</li>
                <li class="list-item"><i class="fas fa-user-lock icon"></i><strong>Protection des Données :</strong> Nous utilisons des mesures de sécurité pour protéger vos informations contre tout accès non autorisé.</li>
                <li class="list-item"><i class="fas fa-database icon"></i><strong>Utilisation des Données :</strong> Vos données sont utilisées uniquement à des fins commerciales et ne sont pas partagées sans votre consentement.</li>
                <li class="list-item"><i class="fas fa-user-times icon"></i><strong>Suppression des Données :</strong> Vous pouvez demander la suppression de vos données à tout moment en nous contactant.</li>
            </ul>`, 
          }
        },
        es:{
          translation : {
            "INDEXID1": "Inicio",
            "INDEXID2": "Acerca de",
            "INDEXID3": "Servicios",
            "INDEXID5": "Nuestros Productos",
            "INDEXID7": "Contacto",
            "INDEXID8": "¿Cómo funciona?",
            "INDEXID9": "¡El comercio de <br> materias primas agrícolas!",
            "INDEXID10": "Juntos hacia un comercio ético y sostenible.",
            "INDEXID11": `<a class="button button-lg button-shadow-4 button-secondary-2 button-zakaria" href="about.html" >Acerca de <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                    </a>`,
            "INDEXID12": "Piña",
            "INDEXID13": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1" data-bs-toggle="tab">Origen y Calidad</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2" data-bs-toggle="tab">Selección</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3" data-bs-toggle="tab">Riqueza</a></li>`,
            "INDEXID14XXX": `                 <div class="tab-pane fade show active" id="tabs-1-1">
                            <p>Las piñas exportadas por Dyscom Negoce se cultivan en las tierras fértiles de África Occidental,
                              conocidas por producir frutas de alta calidad, dulces y jugosas, perfectamente adaptadas a los estándares internacionales.</p>
                          </div>
                          <div class="tab-pane fade" id="tabs-1-2">
                            <p>Dyscom Negoce selecciona cuidadosamente cada piña para garantizar su frescura y calidad.
                              Las técnicas modernas de conservación y embalaje ayudan a conservar los sabores naturales y las propiedades nutricionales durante el transporte.</p>
                          </div>
                          <div class="tab-pane fade" id="tabs-1-3">
                            <p>La piña es rica en vitamina C, fibra y antioxidantes, y es apreciada por sus numerosos
                              beneficios para la salud. Dyscom Negoce se asegura de que las frutas lleguen a los clientes conservando
                              su valor nutricional óptimo, listas para el consumo o procesamiento.</p>
                          </div>`,
            "INDEXID15": "Flor de Hibisco",
            "INDEXID16": ` <li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1b" data-bs-toggle="tab">Producido en África</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2b" data-bs-toggle="tab">Usos</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3b" data-bs-toggle="tab">Beneficios</a></li>`,
            "INDEXID17": ` <div class="tab-pane fade show active" id="tabs-1-1b">
                            <p>El bissap se cultiva en varias regiones de África, especialmente en África Occidental, donde
                              el clima es ideal para producir esta flor rica en color y sabor.
                              Dyscom Negoce trabaja directamente con productores locales para proporcionar una calidad óptima.</p>
                          </div>
                          <div class="tab-pane fade" id="tabs-1-2b">
                            <p>La flor de hibisco se utiliza para hacer bebidas refrescantes, muy populares en África y en todo el mundo,
                              por su sabor ácido y efectos hidratantes.
                              También es apreciada en productos de salud y belleza gracias a sus propiedades antioxidantes.</p>
                          </div>
                          <div class="tab-pane fade" id="tabs-1-3b">
                            <p>El bissap es rico en vitamina C y antioxidantes, lo que lo convierte en una bebida natural
                              para reforzar el sistema inmunológico y reducir la hipertensión. Dyscom Negoce se asegura de que
                              las flores se traten de manera que conserven estos beneficios para los clientes internacionales.</p>
                          </div>`,
                          "INDEXID18": "Almendra de palma",
    "INDEXID19": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1n" data-bs-toggle="tab">Riqueza</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2n" data-bs-toggle="tab">Proceso</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3n" data-bs-toggle="tab">Usos</a></li>`,
    "INDEXID21X": `<div class="tab-pane fade show active" id="tabs-1-1n">
                    <p>La almendra de palma es la semilla contenida en el fruto de la palma aceitera. Es rica en aceite de almendra de palma, un producto muy demandado por su contenido de ácidos grasos saturados e insaturados, utilizado en las industrias alimentaria, cosmética e industrial.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-2n">
                    <p>En Dyscom Negoce, las almendras de palma son cuidadosamente seleccionadas y procesadas para garantizar un aceite de alta calidad. Este proceso produce un producto puro y de calidad, adecuado para las necesidades de las industrias internacionales.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-3n">
                    <p>Tras la extracción del aceite, el residuo, conocido como torta de almendra de palma, se utiliza como alimento para el ganado debido a su riqueza en proteínas y fibras. Dyscom Negoce maximiza el valor de la almendra de palma, contribuyendo a una producción más sostenible.</p>
                  </div>`,
    "INDEXID21": "Hueso de sepia",
    "INDEXID22": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1l" data-bs-toggle="tab">Minerales esenciales</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2l" data-bs-toggle="tab">Usos</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3l" data-bs-toggle="tab">Producto natural</a></li>`,
    "INDEXID22X": `<div class="tab-pane fade show active" id="tabs-1-1l">
                    <p>El hueso de sepia es una fuente natural de calcio y minerales, lo que lo convierte en un suplemento ideal para la alimentación de animales, especialmente aves y reptiles. En Dyscom Negoce, los huesos de sepia son cuidadosamente seleccionados para ofrecer un producto rico en nutrientes.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-2l">
                    <p>Utilizado principalmente en la cría de aves, el hueso de sepia ayuda a afilar los picos de las aves mientras les proporciona calcio para fortalecer sus huesos. También es beneficioso para reptiles que necesitan minerales para su crecimiento y salud.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-3l">
                    <p>El hueso de sepia es un producto natural derivado de las conchas de sepia. Al utilizar este ingrediente, Dyscom Negoce apoya el uso sostenible de recursos marinos, ofreciendo productos que satisfacen diversas necesidades industriales.</p>
                  </div>`,
    "INDEXID24": "Manteca de Karité",
    "INDEXID25": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1bb" data-bs-toggle="tab">Fuente</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2bb" data-bs-toggle="tab">Beneficios</a></li>
                       <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3bb" data-bs-toggle="tab">Usos</a></li>`,
    "INDEXID26": `<div class="tab-pane fade show active" id="tabs-1-1bb">
                    <p>La manteca de karité proviene de las nueces del árbol de karité, cultivado principalmente en África Occidental. Dyscom Negoce obtiene karité directamente de productores locales para garantizar un producto de alta calidad, apoyando a las comunidades locales y preservando prácticas sostenibles.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-2bb">
                    <p>Conocida por sus propiedades hidratantes, la manteca de karité es muy apreciada en el cuidado de la piel y el cabello. Es rica en vitaminas A, E y F y posee cualidades antiinflamatorias y regeneradoras, lo que la convierte en un ingrediente clave en muchos productos de belleza naturales.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-3bb">
                    <p>Más allá de los cosméticos, la manteca de karité se utiliza en la fabricación de productos alimenticios y farmacéuticos. Dyscom Negoce procesa la manteca de karité para cumplir con los estándares internacionales, lo que la hace lista para usar en diversas industrias de todo el mundo.</p>
                  </div>`,
                  "INDEXID27": "Nuestro Compromiso",
    "INDEXID28": `<h4 class="box-icon-classic-title"><a href="#">Calidad</a></h4>
                  <p class="box-icon-classic-text">Seleccionamos cuidadosamente nuestras materias primas para garantizar productos de calidad excepcional.</p>`,
    "INDEXID29": `<h4 class="box-icon-classic-title"><a href="#">Ética</a></h4>
                  <p class="box-icon-classic-text">Nuestras prácticas comerciales promueven un enfoque responsable y sostenible, respetando el medio ambiente y a las personas.</p>`,
    "INDEXID30": `<h4 class="box-icon-classic-title"><a href="#">Innovación</a></h4>
                  <p class="box-icon-classic-text">Colaborando con socios internacionales, exploramos nuevas formas de utilizar productos africanos en varios sectores.</p>`,
    "INDEXID31": `<h4 class="box-icon-classic-title"><a href="#">Transparencia</a></h4>
                  <p class="box-icon-classic-text">Priorizamos una comunicación clara y honesta en cada paso, asegurando una relación de confianza con nuestros socios y clientes.</p>`,
    "INDEXID30V": "Dyscom Negoce: África en el corazón de tu comercio, el mundo al alcance de la mano.",
    "INDEXID31V": "Productos",
    "INDEXID32": "4 Lados",
    "INDEXID33": "Bayas de Milagro",
    "INDEXID34": "Hojas de Djeka",
    "INDEXID34V": "Nep Nep",
    "INDEXID35": "Raíces de Vetiver",
    "INDEXID36": "Cáscara de Palmiste",
    "INDEXID37": "Aceite de Palma",
    "INDEXID38": "Plátanos",
    "INDEXID39": "Valorando los tesoros de África, juntos hacia un comercio ético y sostenible.",
    "INDEXID40": "Continentes",
    "INDEXID41": "Países",
    "INDEXID42": "Clientes Satisfechos",
    "INDEXID43": "Socios",
    "INDEXID44": "Piñas",
    "INDEXID45": "¿Qué tipos de materias primas ofrecen para exportación?",
    "INDEXID46": "Ofrecemos una variedad de productos africanos, incluyendo aceite de palma rojo, cáscaras de palmiste, nep nep, plátano, piña, jengibre, hibisco (flor de bissap), y muchas otras materias primas auténticas.",
    "INDEXID47": "¿Cuáles son las cantidades mínimas y máximas de pedido?",
    "INDEXID48": "Nos adaptamos a las necesidades de cada cliente, ya sea para pequeñas cantidades para pruebas o pedidos a granel. Nuestro equipo puede informar sobre los umbrales específicos según los productos solicitados.",
    "INDEXID49": "¿Cómo garantizan la calidad de los productos exportados?",
    "INDEXID50": "Todos nuestros productos pasan por un riguroso control de calidad para garantizar que cumplen con los estándares internacionales. Trabajamos con proveedores de confianza y usamos laboratorios para analizar nuestras materias primas, asegurando su autenticidad y calidad.",
    "INDEXID51": "¿Cuáles son los plazos y condiciones de entrega?",
    "yearTab-tab": "Los tiempos de entrega dependen del destino y de los productos pedidos. Ofrecemos opciones de transporte flexibles y trabajamos con transportistas fiables para asegurar un envío seguro en el menor tiempo posible.",
    "monthTab-tab": `<h5 class="box-icon-creative-title"><a href="#">Envío Gratuito</a></h5>
                     <p class="box-icon-creative-text">Nuestro envío rápido y gratuito</p>`,
    "weekTab-tab": `<h5 class="box-icon-creative-title"><a href="#">Servicio al Cliente</a></h5>
                    <p class="box-icon-creative-text">Siempre listos para ayudarte</p>`,
    "INDEXID55": `<h5 class="box-icon-creative-title"><a href="#">Mercados Mundiales</a></h5>
                  <p class="box-icon-creative-text">Cumpliendo con los requisitos de los mercados globales</p>`,
                  "INDEXID56": "Nuestros Servicios",
    "INDEXID57": `<h5 class="post-classic-title"><a href="">Exportación de Materias Primas</a></h5>
                  <p class="post-classic-text">Ofrecemos una amplia gama de materias primas africanas de alta calidad, adaptadas a las necesidades de diversos sectores industriales y comerciales en todo el mundo.</p>`,
    "INDEXID58": `<h5 class="post-classic-title"><a href="">Gestión Logística y Transporte</a></h5>
                  <p class="post-classic-text">Gracias a nuestra experiencia en logística internacional, coordinamos cada etapa del envío, desde África hasta el destino final, asegurando una entrega eficiente y segura.</p>`,
    "loanStartDate": `<h5 class="post-classic-title"><a href="">Garantía de Calidad y Conformidad</a></h5>
                      <p class="post-classic-text">Nuestras materias primas pasan por estrictos controles de calidad para garantizar que cumplen con los estándares internacionales, proporcionando a los clientes productos fiables y auténticos.</p>`,
    "loanEndDate": "Flor de Hibisco",
    "INDEXID59": "Enlaces Rápidos",
    "INDEXID60": `<li><a href="index.html">Inicio</a></li>
                  <li><a href="about.html">Acerca de</a></li>
                  <li><a href="#ervices">Servicios</a></li>
                  <li><a href="#Les_Produits">Nuestros Productos</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="contact.html">Contacto</a></li>
                  <li><a href="what.html">¿Cómo Funciona?</a></li>`,
    "INDEXID61": "Ponerse en contacto",
    "INDEXID62": "La nueva generación.",
    "INDEXID63": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1" data-bs-toggle="tab">Acerca de</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2" data-bs-toggle="tab">Nuestra Misión</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3" data-bs-toggle="tab">Nuestros Objetivos</a></li>`,
    "INDEXID64": `<div class="tab-pane fade show active" id="tabs-1-1">
                    <p>Dyscom Negoce es una plataforma de comercio internacional especializada en la exportación de materias primas africanas 
                       hacia los mercados mundiales. Con sede en África, Dyscom Negoce se posiciona como un actor clave en el comercio internacional de productos naturales y materias primas, 
                       combinando calidad, autenticidad y el respeto por las normas internacionales.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-2">
                    <p>Nuestra misión es promover las riquezas naturales de África en el escenario internacional, 
                       apoyando a las comunidades locales y fomentando un crecimiento sostenible. Valoramos un enfoque responsable del comercio, asegurando una cadena de suministro ética que 
                       respete los recursos locales y el bienestar de los productores.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-3">
                    <p>Nuestro objetivo es convertirnos en un socio de confianza en el comercio internacional, 
                       destacando las riquezas de África. Nuestro objetivo es proporcionar materias primas de 
                       alta calidad provenientes de fuentes africanas sostenibles, 
                       respetando las normas internacionales y las necesidades de cada cliente.</p>
                  </div>`,
    "INDEXID65": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
                  </svg> Ir a Inicio`,
    "INDEXID66": "Acerca de",
    "INDEXID67": "Acerca de",
    "INDEXID68": "Suscríbase a nuestro boletín para recibir novedades, actualizaciones, ofertas especiales y descuentos exclusivos cada semana.",
    "accountId": "Ingrese su correo electrónico",
    "INDEXID69": `<div class="col-sm-6 col-lg-3">
                    <article class="box-icon-modern">
                      <div class="box-icon-modern-header">
                        <div class="box-icon-modern-count box-ordered-item"></div>
                        <div class="box-icon-modern-icon fas fa-envelope"></div>
                      </div>
                      <h4 class="box-icon-modern-title"><a href="#">Contacto</a></h4>
                      <p class="box-icon-modern-text">El cliente nos contacta a través de nuestro sitio web, correo electrónico o teléfono para expresar sus necesidades específicas de materias primas (cantidad, calidad, especificaciones). En este paso, escuchamos y asesoramos al cliente para comprender mejor sus expectativas y presentar las opciones disponibles.</p>
                    </article>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <article class="box-icon-modern">
                      <div class="box-icon-modern-header">
                        <div class="box-icon-modern-count box-ordered-item"></div>
                        <div class="box-icon-modern-icon fas fa-handshake"></div>
                      </div>
                      <h4 class="box-icon-modern-title"><a href="#">Propuesta Personalizada</a></h4>
                      <p class="box-icon-modern-text">Después de recopilar los detalles necesarios, nuestro equipo elabora una propuesta comercial adaptada a las necesidades del cliente, que incluye precios, plazos y condiciones de entrega. También respondemos a las preguntas para garantizar que el cliente esté completamente informado antes de tomar una decisión.</p>
                    </article>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <article class="box-icon-modern">
                      <div class="box-icon-modern-header">
                        <div class="box-icon-modern-count box-ordered-item"></div>
                        <div class="box-icon-modern-icon fas fa-thumbs-up"></div>
                      </div>
                      <h4 class="box-icon-modern-title"><a href="#">Validación de Calidad</a></h4>
                      <p class="box-icon-modern-text">Si es necesario, podemos proporcionar muestras de productos para que el cliente evalúe la calidad. Este paso garantiza que las materias primas cumplan con las expectativas del cliente antes de confirmar el pedido.</p>
                    </article>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <article class="box-icon-modern">
                      <div class="box-icon-modern-header">
                        <div class="box-icon-modern-count box-ordered-item"></div>
                        <div class="box-icon-modern-icon fas fa-clipboard-check"></div>
                      </div>
                      <h4 class="box-icon-modern-title"><a href="#">Confirmación de Pedido</a></h4>
                      <p class="box-icon-modern-text">Una vez que la propuesta ha sido validada y las condiciones aceptadas, el cliente realiza su pedido. Procedemos entonces con las preparaciones logísticas y administrativas para enviar los productos, garantizando una entrega segura y dentro de los plazos acordados.</p>
                    </article>
                  </div>`,
                  "INDEXID70": `<h2 class="section-title"><i class="fas fa-gavel icon"></i> Términos y Condiciones</h2>
                  <p>¡Bienvenido a Dyscom Negoce! Al acceder y utilizar este sitio, acepta los siguientes términos y condiciones:</p>
                  <ul class="list-unstyled">
                      <li class="list-item"><i class="fas fa-user-check icon"></i><strong>Uso del Sitio:</strong> Debe utilizar este sitio de acuerdo con las leyes vigentes y los términos generales de Dyscom Negoce.</li>
                      <li class="list-item"><i class="fas fa-lock icon"></i><strong>Privacidad:</strong> Su información personal está protegida y procesada según nuestra política de privacidad.</li>
                      <li class="list-item"><i class="fas fa-handshake icon"></i><strong>Compromisos de los Usuarios:</strong> Los usuarios deben proporcionar información precisa y no infringir los derechos de terceros.</li>
                      <li class="list-item"><i class="fas fa-exchange-alt icon"></i><strong>Modificaciones:</strong> Nos reservamos el derecho de modificar estos términos en cualquier momento.</li>
                  </ul>
                  
                  <h2 class="section-title"><i class="fas fa-user-secret icon"></i> Política de Privacidad</h2>
                  <p>En Dyscom Negoce, tomamos muy en serio la privacidad de su información personal. A continuación, se presentan los puntos principales de nuestra política:</p>
                  <ul class="list-unstyled">
                      <li class="list-item"><i class="fas fa-user-shield icon"></i><strong>Recopilación de Información:</strong> Recopilamos la información necesaria para brindar una mejor experiencia al usuario.</li>
                      <li class="list-item"><i class="fas fa-user-lock icon"></i><strong>Protección de Datos:</strong> Utilizamos medidas de seguridad para proteger su información contra accesos no autorizados.</li>
                      <li class="list-item"><i class="fas fa-database icon"></i><strong>Uso de los Datos:</strong> Sus datos se utilizan únicamente con fines comerciales y no se comparten sin su consentimiento.</li>
                      <li class="list-item"><i class="fas fa-user-times icon"></i><strong>Eliminación de Datos:</strong> Puede solicitar la eliminación de sus datos en cualquier momento contactándonos.</li>
                  </ul>`
        }
        
        },
        ar:{
          translation : {
            "INDEXID1": "الرئيسية",
            "INDEXID2": "حول",
            "INDEXID3": "الخدمات",
            "INDEXID5": "منتجاتنا",
            "INDEXID7": "اتصل بنا",
            "INDEXID8": "كيف تعمل؟",
            "INDEXID9": "تجارة <br> المواد الخام الزراعية!",
            "INDEXID10": "معًا نحو تجارة أخلاقية ومستدامة.",
            "INDEXID11": `<a class="button button-lg button-shadow-4 button-secondary-2 button-zakaria" href="about.html" >حول <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                    </a>`,
            "INDEXID12": "الأناناس",
            "INDEXID13": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1" data-bs-toggle="tab">الأصل والجودة</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2" data-bs-toggle="tab">الاختيار</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3" data-bs-toggle="tab">الغنى</a></li>`,
            "INDEXID14XXX": `                 <div class="tab-pane fade show active" id="tabs-1-1">
                            <p>يتم زراعة الأناناس الذي تصدره شركة Dyscom Negoce في أراضي غرب إفريقيا الخصبة،
                              والتي تُعرف بإنتاج الفواكه عالية الجودة والحلوة والعصيرية، والتي تلبي المعايير الدولية تمامًا.</p>
                          </div>
                          <div class="tab-pane fade" id="tabs-1-2">
                            <p>تقوم Dyscom Negoce باختيار الأناناس بعناية لضمان طراوته وجودته.
                              تساهم تقنيات الحفظ والتغليف الحديثة في الحفاظ على النكهات الطبيعية والخصائص الغذائية أثناء النقل.</p>
                          </div>
                          <div class="tab-pane fade" id="tabs-1-3">
                            <p>الأناناس غني بفيتامين C والألياف ومضادات الأكسدة، ويقدر لفوائده العديدة على الصحة.
                              تضمن Dyscom Negoce وصول الفواكه إلى العملاء مع الحفاظ على قيمتها الغذائية المثلى، جاهزة للاستهلاك أو المعالجة.</p>
                          </div>`,
            "INDEXID15": "زهرة الكركديه",
            "INDEXID16": ` <li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1b" data-bs-toggle="tab">منتجة في إفريقيا</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2b" data-bs-toggle="tab">الاستخدامات</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3b" data-bs-toggle="tab">الفوائد</a></li>`,
            "INDEXID17": ` <div class="tab-pane fade show active" id="tabs-1-1b">
                            <p>يتم زراعة البساب في عدة مناطق من إفريقيا، خاصة في غرب إفريقيا حيث
                              المناخ مثالي لإنتاج هذه الزهرة الغنية بالألوان والنكهة.
                              تعمل Dyscom Negoce مباشرة مع المنتجين المحليين لتوفير جودة مثالية.</p>
                          </div>
                          <div class="tab-pane fade" id="tabs-1-2b">
                            <p>تستخدم زهرة الكركديه لصنع مشروبات منعشة، تحظى بشعبية كبيرة في إفريقيا وحول العالم،
                              لما تتميز به من نكهة حمضية وآثار مرطبة.
                              كما تُقدر في منتجات الصحة والجمال بسبب خصائصها المضادة للأكسدة.</p>
                          </div>
                          <div class="tab-pane fade" id="tabs-1-3b">
                            <p>البساب غني بفيتامين C ومضادات الأكسدة، مما يجعله مشروبًا طبيعيًا
                              لتعزيز جهاز المناعة وتقليل ضغط الدم. تضمن Dyscom Negoce معالجة الزهور
                              بطريقة تحافظ على هذه الفوائد للعملاء الدوليين.</p>
                          </div>`,
                          "INDEXID18": "نواة النخيل",
                          "INDEXID19": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1n" data-bs-toggle="tab">الثروة</a></li>
                                        <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2n" data-bs-toggle="tab">العملية</a></li>
                                        <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3n" data-bs-toggle="tab">الاستخدامات</a></li>`,
                          "INDEXID21X": `<div class="tab-pane fade show active" id="tabs-1-1n">
                                          <p>نواة النخيل هي البذرة الموجودة داخل ثمرة النخيل الزيتي. إنها غنية بزيت النخيل، وهو منتج مطلوب لمحتواه من الأحماض الدهنية المشبعة وغير المشبعة، ويستخدم في الصناعات الغذائية والتجميلية والصناعية.</p>
                                        </div>
                                        <div class="tab-pane fade" id="tabs-1-2n">
                                          <p>في Dyscom Negoce، يتم اختيار نواة النخيل بعناية ومعالجتها لضمان جودة عالية للزيت المستخرج. تضمن هذه العملية منتجًا نقيًا وعالي الجودة يلبي احتياجات الصناعات العالمية.</p>
                                        </div>
                                        <div class="tab-pane fade" id="tabs-1-3n">
                                          <p>بعد استخراج الزيت، يُستخدم المتبقي المعروف بكيك نواة النخيل كعلف للماشية بفضل غناه بالبروتينات والألياف. تسهم Dyscom Negoce في الاستفادة المثلى من نواة النخيل، مما يسهم في إنتاج أكثر استدامة.</p>
                                        </div>`,
                          "INDEXID21": "عظم الحبار",
                          "INDEXID22": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1l" data-bs-toggle="tab">معادن أساسية</a></li>
                                        <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2l" data-bs-toggle="tab">الاستخدامات</a></li>
                                        <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3l" data-bs-toggle="tab">منتج طبيعي</a></li>`,
                          "INDEXID22X": `<div class="tab-pane fade show active" id="tabs-1-1l">
                                          <p>عظم الحبار هو مصدر طبيعي للكالسيوم والمعادن، مما يجعله مكملًا غذائيًا مثاليًا للحيوانات، خاصةً الطيور والزواحف. في Dyscom Negoce، يتم اختيار عظام الحبار بعناية لتقديم منتج غني بالعناصر الغذائية.</p>
                                        </div>
                                        <div class="tab-pane fade" id="tabs-1-2l">
                                          <p>يُستخدم عظم الحبار بشكل رئيسي في تربية الطيور، حيث يساعد على تقوية مناقيرها بينما يزودها بالكالسيوم لتعزيز عظامها. وهو مفيد أيضًا للزواحف التي تحتاج إلى المعادن للنمو والصحة.</p>
                                        </div>
                                        <div class="tab-pane fade" id="tabs-1-3l">
                                          <p>عظم الحبار هو منتج طبيعي يأتي من أصداف الحبار. من خلال استخدام هذا المكون، تدعم Dyscom Negoce الاستخدام المستدام للموارد البحرية، حيث تقدم منتجات تلبي احتياجات صناعات متنوعة.</p>
                                        </div>`,
                          "INDEXID24": "زبدة الشيا",
                          "INDEXID25": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1bb" data-bs-toggle="tab">المصدر</a></li>
                                        <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2bb" data-bs-toggle="tab">الفوائد</a></li>
                                        <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3bb" data-bs-toggle="tab">الاستخدامات</a></li>`,
                          "INDEXID26": `<div class="tab-pane fade show active" id="tabs-1-1bb">
                                          <p>تُستخرج زبدة الشيا من ثمار شجرة الشيا، المزروعة بشكل رئيسي في غرب إفريقيا. تتعاون Dyscom Negoce مع المنتجين المحليين للحصول على زبدة الشيا مباشرة لضمان جودة عالية، مع دعم المجتمعات المحلية والحفاظ على الممارسات المستدامة.</p>
                                        </div>
                                        <div class="tab-pane fade" id="tabs-1-2bb">
                                          <p>تشتهر زبدة الشيا بخصائصها المرطبة، وتُعتبر مكونًا هامًا في العناية بالبشرة والشعر. إنها غنية بفيتامينات A وE وF ولها خصائص مضادة للالتهاب ومجددة، مما يجعلها عنصرًا رئيسيًا في العديد من منتجات التجميل الطبيعية.</p>
                                        </div>
                                        <div class="tab-pane fade" id="tabs-1-3bb">
                                          <p>تُستخدم زبدة الشيا أيضًا في صناعة المنتجات الغذائية والصيدلانية. تقوم Dyscom Negoce بمعالجة زبدة الشيا لتلبية المعايير الدولية، مما يجعلها جاهزة للاستخدام في مختلف الصناعات حول العالم.</p>
                                        </div>`,
                                        "INDEXID27": "التزامنا",
    "INDEXID28": `<h4 class="box-icon-classic-title"><a href="#">الجودة</a></h4>
                  <p class="box-icon-classic-text">نحن نختار موادنا الخام بعناية لضمان منتجات ذات جودة استثنائية.</p>`,
    "INDEXID29": `<h4 class="box-icon-classic-title"><a href="#">الأخلاق</a></h4>
                  <p class="box-icon-classic-text">تعزز ممارساتنا التجارية نهجًا مسؤولًا ومستدامًا يحترم البيئة والناس.</p>`,
    "INDEXID30": `<h4 class="box-icon-classic-title"><a href="#">الابتكار</a></h4>
                  <p class="box-icon-classic-text">من خلال الشراكة مع جهات دولية، نستكشف طرقًا جديدة لاستخدام المنتجات الأفريقية في قطاعات متنوعة.</p>`,
    "INDEXID31": `<h4 class="box-icon-classic-title"><a href="#">الشفافية</a></h4>
                  <p class="box-icon-classic-text">نفضل التواصل الواضح والصادق في كل خطوة، لضمان علاقة ثقة مع شركائنا وعملائنا.</p>`,
    "INDEXID30V": "ديسكوم نيجوس: أفريقيا في قلب تجارتك، العالم في متناول يدك.",
    "INDEXID31V": "المنتجات",
    "INDEXID32": "أربعة جوانب",
    "INDEXID33": "ثمار المعجزة",
    "INDEXID34": "أوراق الجيكا",
    "INDEXID34V": "نب نب",
    "INDEXID35": "جذور الفتيفر",
    "INDEXID36": "قشور نوى النخيل",
    "INDEXID37": "زيت النخيل",
    "INDEXID38": "الموز",
    "INDEXID39": "تثمين كنوز إفريقيا، معًا نحو تجارة أخلاقية ومستدامة.",
    "INDEXID40": "القارات",
    "INDEXID41": "الدول",
    "INDEXID42": "العملاء الراضون",
    "INDEXID43": "الشركاء",
    "INDEXID44": "الأناناس",
    "INDEXID45": "ما أنواع المواد الخام التي تقدمونها للتصدير؟",
    "INDEXID46": "نقدم مجموعة متنوعة من المنتجات الأفريقية الخام، بما في ذلك زيت النخيل الأحمر، قشور نوى النخيل، النب نب، الموز، الأناناس، الزنجبيل، الكركديه (زهور البساب)، وغيرها من المواد الخام الأصيلة.",
    "INDEXID47": "ما هي الحد الأدنى والأقصى للكميات المطلوبة؟",
    "INDEXID48": "نتكيف مع احتياجات كل عميل، سواء كان ذلك لكميات صغيرة للاختبار أو طلبات بالجملة. يمكن لفريقنا إبلاغكم بالحدود المحددة وفقًا للمنتجات المطلوبة.",
    "INDEXID49": "كيف تضمنون جودة المنتجات المصدرة؟",
    "INDEXID50": "تمر جميع منتجاتنا بفحص دقيق للجودة لضمان مطابقتها للمعايير الدولية. نعمل مع موردين موثوقين ونستخدم المختبرات لاختبار موادنا الخام، لضمان أصالتها وجودتها.",
    "INDEXID51": "ما هي أوقات وظروف التسليم؟",
    "yearTab-tab": "تعتمد أوقات التسليم على الوجهة والمنتجات المطلوبة. نحن نقدم خيارات نقل مرنة ونعمل مع ناقلين موثوقين لضمان شحن آمن في أقصر وقت ممكن.",
    "monthTab-tab": `<h5 class="box-icon-creative-title"><a href="#">توصيل مجاني</a></h5>
                     <p class="box-icon-creative-text">توصيلنا سريع ومجاني</p>`,
    "weekTab-tab": `<h5 class="box-icon-creative-title"><a href="#">خدمة العملاء</a></h5>
                    <p class="box-icon-creative-text">جاهزون دائماً لمساعدتك</p>`,
    "INDEXID55": `<h5 class="box-icon-creative-title"><a href="#">الأسواق العالمية</a></h5>
                  <p class="box-icon-creative-text">تلبية متطلبات الأسواق العالمية</p>`,
    "INDEXID56": "خدماتنا",
    "INDEXID57": `<h5 class="post-classic-title"><a href="">تصدير المواد الخام</a></h5>
                  <p class="post-classic-text">نقدم مجموعة واسعة من المواد الخام الأفريقية عالية الجودة، التي تناسب احتياجات القطاعات الصناعية والتجارية المتنوعة حول العالم.</p>`,
    "INDEXID58": `<h5 class="post-classic-title"><a href="">إدارة اللوجستيات والنقل</a></h5>
                  <p class="post-classic-text">بفضل خبرتنا في اللوجستيات الدولية، ننسق كل مرحلة من مراحل الشحن، من إفريقيا إلى الوجهة النهائية، لضمان تسليم فعال وآمن.</p>`,
    "loanStartDate": `<h5 class="post-classic-title"><a href="">ضمان الجودة والامتثال</a></h5>
                      <p class="post-classic-text">تخضع موادنا الخام لعمليات فحص جودة صارمة لضمان مطابقتها للمعايير الدولية، مما يوفر للعملاء منتجات موثوقة وأصيلة.</p>`,
    "loanEndDate": "زهرة الكركديه",
    "INDEXID59": "روابط سريعة",
    "INDEXID60": `<li><a href="index.html">الرئيسية</a></li>
                  <li><a href="about.html">من نحن</a></li>
                  <li><a href="#ervices">الخدمات</a></li>
                  <li><a href="#Les_Produits">منتجاتنا</a></li>
                  <li><a href="#faq">الأسئلة المتكررة</a></li>
                  <li><a href="contact.html">اتصل بنا</a></li>
                  <li><a href="what.html">كيف يعمل؟</a></li>`,
    "INDEXID61": "تواصل معنا",
    "INDEXID62": "الجيل الجديد.",
    "INDEXID63": `<li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1" data-bs-toggle="tab">من نحن</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2" data-bs-toggle="tab">مهمتنا</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3" data-bs-toggle="tab">أهدافنا</a></li>`,
                  "INDEXID64": `<div class="tab-pane fade show active" id="tabs-1-1">
                    <p>ديسكوم نيجوس هو منصة تجارة دولية متخصصة في تصدير المواد الخام الأفريقية 
                       إلى الأسواق العالمية. يقع مقرنا في إفريقيا، ونتخذ موقعًا مهمًا في التجارة الدولية للمنتجات الطبيعية والمواد الخام، 
                       من خلال دمج الجودة والأصالة والامتثال للمعايير الدولية.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-2">
                    <p>مهمتنا هي تعزيز الثروات الطبيعية لأفريقيا على الساحة الدولية، 
                       مع دعم المجتمعات المحلية وتعزيز النمو المستدام. نحن نقدر النهج المسؤول للتجارة، مع ضمان سلسلة توريد أخلاقية 
                       تحترم الموارد المحلية ورفاهية المنتجين.</p>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-3">
                    <p>هدفنا هو أن نصبح شريكًا موثوقًا في التجارة الدولية، 
                       مع إبراز ثروات إفريقيا. نسعى لتوفير المواد الخام عالية الجودة 
                       من مصادر أفريقية مستدامة، 
                       مع احترام المعايير الدولية واحتياجات كل عميل.</p>
                  </div>`,
    "INDEXID65": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
                  </svg> الذهاب إلى الصفحة الرئيسية`,
    "INDEXID66": "من نحن",
    "INDEXID67": "من نحن",
    "INDEXID68": "اشترك في النشرة الإخبارية لتلقي الأخبار، التحديثات، العروض الخاصة والخصومات الحصرية كل أسبوع.",
    "accountId": "أدخل بريدك الإلكتروني",
    "INDEXID69": `<div class="col-sm-6 col-lg-3">
                    <article class="box-icon-modern">
                      <div class="box-icon-modern-header">
                        <div class="box-icon-modern-count box-ordered-item"></div>
                        <div class="box-icon-modern-icon fas fa-envelope"></div>
                      </div>
                      <h4 class="box-icon-modern-title"><a href="#">التواصل</a></h4>
                      <p class="box-icon-modern-text">يتواصل العميل معنا عبر موقعنا الإلكتروني أو البريد الإلكتروني أو الهاتف للتعبير عن احتياجاته الخاصة من المواد الخام (الكمية، الجودة، المواصفات). في هذه المرحلة، نستمع إلى العميل ونقدم له النصائح لفهم احتياجاته بشكل أفضل وتقديم الخيارات المتاحة.</p>
                    </article>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <article class="box-icon-modern">
                      <div class="box-icon-modern-header">
                        <div class="box-icon-modern-count box-ordered-item"></div>
                        <div class="box-icon-modern-icon fas fa-handshake"></div>
                      </div>
                      <h4 class="box-icon-modern-title"><a href="#">اقتراح مخصص</a></h4>
                      <p class="box-icon-modern-text">بعد جمع التفاصيل اللازمة، يقوم فريقنا بإعداد اقتراح تجاري مخصص وفقًا لاحتياجات العميل، ويشمل الأسعار والمواعيد وظروف التسليم. كما نجيب على الأسئلة لضمان أن العميل على دراية كاملة قبل اتخاذ قراره.</p>
                    </article>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <article class="box-icon-modern">
                      <div class="box-icon-modern-header">
                        <div class="box-icon-modern-count box-ordered-item"></div>
                        <div class="box-icon-modern-icon fas fa-thumbs-up"></div>
                      </div>
                      <h4 class="box-icon-modern-title"><a href="#">تحقق من الجودة</a></h4>
                      <p class="box-icon-modern-text">إذا لزم الأمر، يمكننا تقديم عينات من المنتجات ليقوم العميل بتقييم الجودة. تضمن هذه الخطوة أن المواد الخام تتماشى مع توقعات العميل قبل تأكيد الطلب.</p>
                    </article>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <article class="box-icon-modern">
                      <div class="box-icon-modern-header">
                        <div class="box-icon-modern-count box-ordered-item"></div>
                        <div class="box-icon-modern-icon fas fa-clipboard-check"></div>
                      </div>
                      <h4 class="box-icon-modern-title"><a href="#">تأكيد الطلب</a></h4>
                      <p class="box-icon-modern-text">بمجرد أن يتم تأكيد الاقتراح وقبول الشروط، يقوم العميل بتقديم الطلب. نبدأ بعد ذلك التحضيرات اللوجستية والإدارية لشحن المنتجات، مع ضمان تسليم آمن وفي الوقت المحدد.</p>
                    </article>
                  </div>`,
                  "INDEXID70": `<h2 class="section-title"><i class="fas fa-gavel icon"></i> الشروط والأحكام</h2>
                  <p>مرحبًا بكم في ديشكو نيجوسي! عند الوصول إلى هذا الموقع واستخدامه، فإنك توافق على الشروط والأحكام التالية:</p>
                  <ul class="list-unstyled">
                      <li class="list-item"><i class="fas fa-user-check icon"></i><strong>استخدام الموقع:</strong> يجب عليك استخدام هذا الموقع وفقًا للقوانين السارية والشروط العامة لديشكو نيجوسي.</li>
                      <li class="list-item"><i class="fas fa-lock icon"></i><strong>الخصوصية:</strong> تتم حماية معلوماتك الشخصية ومعالجتها وفقًا لسياسة الخصوصية لدينا.</li>
                      <li class="list-item"><i class="fas fa-handshake icon"></i><strong>التزامات المستخدمين:</strong> يجب على المستخدمين تقديم معلومات دقيقة وعدم انتهاك حقوق الأطراف الثالثة.</li>
                      <li class="list-item"><i class="fas fa-exchange-alt icon"></i><strong>التعديلات:</strong> نحتفظ بالحق في تعديل هذه الشروط في أي وقت.</li>
                  </ul>
                  
                  <h2 class="section-title"><i class="fas fa-user-secret icon"></i> سياسة الخصوصية</h2>
                  <p>في ديشكو نيجوسي، نأخذ خصوصية معلوماتك الشخصية على محمل الجد. إليك النقاط الرئيسية في سياستنا:</p>
                  <ul class="list-unstyled">
                      <li class="list-item"><i class="fas fa-user-shield icon"></i><strong>جمع المعلومات:</strong> نقوم بجمع المعلومات اللازمة لتوفير تجربة مستخدم أفضل.</li>
                      <li class="list-item"><i class="fas fa-user-lock icon"></i><strong>حماية البيانات:</strong> نستخدم تدابير الأمان لحماية معلوماتك من الوصول غير المصرح به.</li>
                      <li class="list-item"><i class="fas fa-database icon"></i><strong>استخدام البيانات:</strong> تُستخدم بياناتك فقط لأغراض تجارية ولا يتم مشاركتها بدون موافقتك.</li>
                      <li class="list-item"><i class="fas fa-user-times icon"></i><strong>حذف البيانات:</strong> يمكنك طلب حذف بياناتك في أي وقت عن طريق الاتصال بنا.</li>
                  </ul>`
        }
        
        }

        
      
    }
    }, function(err, t) {
      // Traduire le contenu de la page après initialisation de i18next
      translatePage();
    });
  
    // Fonction pour traduire le contenu de la page
    function translatePage() {
      // Récupérez la description correspondant à la langue actuelle
      var description = i18next.t('IDTRANSLATE11');
  
      // Sélectionnez la balise <meta> de description
      var metaDescription = $("meta[name='description']");
  
      // Mettez à jour le contenu de la balise <meta> avec la description
      metaDescription.attr('content', description);
  
      // Récupérez le keywords correspondant à la langue actuelle
      var keywords = i18next.t('keywords');
  
      // Sélectionnez la balise <meta> de description
      var metaKeywords = $("meta[name='keywords']");
  
      // Mettez à jour le contenu de la balise <meta> avec la description  
      metaKeywords.attr('content', keywords);  
      //$("#INDEXID1").attr("placeholder", i18next.t("INDEXID1")); INDEXID3
      $("#INDEXID1").text(i18next.t("INDEXID1")); 
      $("#INDEXID2").text(i18next.t("INDEXID2"));
      $("#INDEXID3").html(i18next.t("INDEXID3")); 
      $("#INDEXID4").text(i18next.t("INDEXID4")); 
      $("#yourEmail").attr("placeholder", i18next.t("yourEmail"));
      $("#yournameId").attr("placeholder", i18next.t("yournameId"));
      $("#yourPassword").attr("placeholder", i18next.t("yourPassword")); 
      $("#loanStartDate").attr("placeholder", i18next.t("loanStartDate"));  
      $("#soldeId").attr("placeholder", i18next.t("soldeId"));  
      $("#loanEndDate").attr("placeholder", i18next.t("loanEndDate")); 
      $("#INDEXID7").attr("value", i18next.t("INDEXID7")); 
      $("#INDEXID2W").attr("value", i18next.t("INDEXID7"));
      $("#submitid").attr("value", i18next.t("submitid"));
      $("#INDEXID4WWW").html(i18next.t("INDEXID4")); 
      $("#INDEXID5").html(i18next.t("INDEXID5"));
      $("#INDEXID6").html(i18next.t("INDEXID6")); 
      $("#INDEXID8").html(i18next.t("INDEXID8"));
      $("#INDEXID8SDF").html(i18next.t("INDEXID8"));
      $("#INDEXID9").html(i18next.t("INDEXID9"));
      $("#INDEXID10").html(i18next.t("INDEXID10"));
      $("#INDEXID11").html(i18next.t("INDEXID11"));
      $("#INDEXID12").html(i18next.t("INDEXID12"));
      $("#INDEXID13").html(i18next.t("INDEXID13"));
      $("#INDEXID14XXX").html(i18next.t("INDEXID14XXX"));
      $("#INDEXID15").html(i18next.t("INDEXID15"));
      $("#INDEXID16").html(i18next.t("INDEXID16"));
      $("#INDEXID17").html(i18next.t("INDEXID17"));
      $("#INDEXID18").html(i18next.t("INDEXID18"));
      $("#INDEXID19").html(i18next.t("INDEXID19"));
      $("#INDEXID20").html(i18next.t("INDEXID12")); 
      $("#INDEXID21").html(i18next.t("INDEXID21"));
      $("#INDEXID21X").html(i18next.t("INDEXID21X"));
      $("#WithdrawalId").html(i18next.t("WithdrawalId"));
      $("#INDEXID22").html(i18next.t("INDEXID22"));
      $("#INDEXID22X").html(i18next.t("INDEXID22X"));
      $("#INDEXID24").html(i18next.t("INDEXID24"));
      $("#INDEXID25").html(i18next.t("INDEXID25"));
      $("#INDEXID26").html(i18next.t("INDEXID26"));
      $("#INDEXID27").html(i18next.t("INDEXID27"));
      $("#INDEXID28").html(i18next.t("INDEXID28"));
      $("#INDEXID29").html(i18next.t("INDEXID29"));
      $("#INDEXID30").html(i18next.t("INDEXID30"));
      $("#INDEXID31").html(i18next.t("INDEXID31"));
      $("#INDEXID32").html(i18next.t("INDEXID32"));
      $("#INDEXID30V").html(i18next.t("INDEXID30V"));
      $("#INDEXID31V").html(i18next.t("INDEXID31V"));
      $("#INDEXID32V").html(i18next.t("INDEXID32"));
      $("#INDEXID33").html(i18next.t("INDEXID33"));
     // $("#alert-in").html(i18next.t("alert-in"));
      $("#INDEXID34").html(i18next.t("INDEXID34"));
      $("#INDEXID35").html(i18next.t("INDEXID35"));
      $("#INDEXID36").html(i18next.t("INDEXID36"));
      $("#INDEXID37").html(i18next.t("INDEXID37"));
      $("#INDEXID38").html(i18next.t("INDEXID38"));
      $("#INDEXID39").html(i18next.t("INDEXID39"));
      $("#INDEXID40").html(i18next.t("INDEXID40"));
      $("#INDEXID41").html(i18next.t("INDEXID41"));
      $("#INDEXID42").html(i18next.t("INDEXID42"));
      $("#INDEXID43").html(i18next.t("INDEXID43"));
      $("#INDEXID44").html(i18next.t("INDEXID44"));
      $("#INDEXID45").html(i18next.t("INDEXID45"));
      $("#INDEXID46").html(i18next.t("INDEXID46"));
      $("#INDEXID47").html(i18next.t("INDEXID47"));
      $("#INDEXID48").html(i18next.t("INDEXID48"));
      $("#INDEXID49").html(i18next.t("INDEXID49"));
      $("#INDEXID50").html(i18next.t("INDEXID50"));
      $("#INDEXID51").html(i18next.t("INDEXID51"));
      $("#yearTab-tab").html(i18next.t("yearTab-tab"));
      $("#monthTab-tab").html(i18next.t("monthTab-tab"));
      $("#weekTab-tab").html(i18next.t("weekTab-tab"));
      $("#INDEXID55").html(i18next.t("INDEXID55"));
      $("#INDEXID56").html(i18next.t("INDEXID56"));
      $("#INDEXID57").html(i18next.t("INDEXID57"));
      $("#INDEXID58").html(i18next.t("INDEXID58"));
      $("#INDEXID59").html(i18next.t("INDEXID59"));
      $("#INDEXID60").html(i18next.t("INDEXID60"));
      $("#INDEXID61").html(i18next.t("INDEXID61"));
      $("#INDEXID62").html(i18next.t("INDEXID62"));
      $("#INDEXID63").html(i18next.t("INDEXID63"));
      $("#INDEXID64").html(i18next.t("INDEXID64"));
      $("#INDEXID65").html(i18next.t("INDEXID65"));
      $("#INDEXID66").html(i18next.t("INDEXID66"));
      $("#INDEXID67").html(i18next.t("INDEXID67"));
      $("#INDEXID68").html(i18next.t("INDEXID68"));
      $("#INDEXID69").html(i18next.t("INDEXID69"));
      $("#INDEXID70").html(i18next.t("INDEXID70"));
      $("#INDEXID7").html(i18next.t("INDEXID7"));
      $("#INDEXID71").html(i18next.t("INDEXID71"));
      $("#INDEXID72").html(i18next.t("INDEXID2"));
      $("#INDEXID73").html(i18next.t("INDEXID3"));
      $("#INDEXID74").html(i18next.t("INDEXID4"));
      $("#INDEXID75").html(i18next.t("INDEXID5")); 
      $("#INDEXID76").html(i18next.t("INDEXID8"));
      $("#accountId").html(i18next.t("accountId"));
      $("#bankId").html(i18next.t("INDEXID8"));
      $("#INDEXID77").html(i18next.t("INDEXID77")); 
      $("#INDEXID78").html(i18next.t("INDEXID78"));
      $("#TERMES1").html(i18next.t("TERMES1"));
      $("#TERMES2").html(i18next.t("TERMES2"));
      $("#TERMES3").html(i18next.t("TERMES3"));
      $("#TERMES4").html(i18next.t("TERMES4"));
      $("#TERMES5").html(i18next.t("TERMES5"));
      $("#TERMES6").html(i18next.t("TERMES6"));
      $("#TERMES7").html(i18next.t("TERMES7"));
      $("#TERMES71XB").html(i18next.t("TERMES71XB"));
      $("#TERMES71XC").html(i18next.t("TERMES71XC")); 
      $("#TERMES8").html(i18next.t("TERMES8"));
      $("#TERMES9").html(i18next.t("TERMES9"));
      $("#TERMES10").html(i18next.t("TERMES10"));
      $("#TERMES11").html(i18next.t("TERMES11")); 
      $("#TERMES12").html(i18next.t("TERMES12"));
      $("#captureBtn").html(i18next.t("captureBtn"));
      $("#DEPARTMENTS1").html(i18next.t("DEPARTMENTS1"));
      $("#DEPARTMENTS2").html(i18next.t("DEPARTMENTS2"));
      $("#DEPARTMENTS3").html(i18next.t("DEPARTMENTS3"));
      $("#DEPARTMENTS4").html(i18next.t("DEPARTMENTS4"));
      $("#DEPARTMENTS5").html(i18next.t("DEPARTMENTS5"));
      $("#DEPARTMENTS6").html(i18next.t("DEPARTMENTS6"));
      $("#DEPARTMENTS7").html(i18next.t("DEPARTMENTS7"));
      $("#DEPARTMENTS8").html(i18next.t("DEPARTMENTS8"));
      $("#DEPARTMENTS9").html(i18next.t("DEPARTMENTS9"));
      $("#DEPARTMENTS10").html(i18next.t("DEPARTMENTS10"));
      $("#DEPARTMENTS11").html(i18next.t("DEPARTMENTS11"));
      $("#DEPARTMENTS12").html(i18next.t("DEPARTMENTS12"));
      $("#DEPARTMENTS13").html(i18next.t("DEPARTMENTS13"));
      $("#DEPARTMENTS14").html(i18next.t("DEPARTMENTS14"));
      $("#DEPARTMENTS15").html(i18next.t("DEPARTMENTS15"));
      $("#DEPARTMENTS15").attr("value", i18next.t("DEPARTMENTS15")); 
      $("#DEPARTMENTS16").attr("value", i18next.t("DEPARTMENTS16")); 
      $("#DEPARTMENTS16").html(i18next.t("DEPARTMENTS16"));  
      $("#DEPARTMENTS17").html(i18next.t("DEPARTMENTS17"));
      $("#DEPARTMENTS18").html(i18next.t("DEPARTMENTS18"));
      $("#DEPARTMENTS19").html(i18next.t("DEPARTMENTS19"));
      $("#DEPARTMENTS20").html(i18next.t("DEPARTMENTS20"));

      $("#inlineRadio1x").html(i18next.t("inlineRadio1"));  
      $("#inlineRadio2x").html(i18next.t("inlineRadio2"));
      $("#inlineRadio3x").html(i18next.t("inlineRadio3"));
      $("#inlineRadio4x").html(i18next.t("inlineRadio4"));
      $("#inlineRadio5x").html(i18next.t("inlineRadio5"));
      $("#inlineRadio1").attr("value", i18next.t("inlineRadio1"));
      $("#inlineRadio2").attr("value", i18next.t("inlineRadio2"));
      $("#inlineRadio3").attr("value", i18next.t("inlineRadio3"));
      $("#inlineRadio4").attr("value", i18next.t("inlineRadio4"));
      $("#inlineRadio5").attr("value", i18next.t("inlineRadio5"));
      $("#DEPARTMENTS21").html(i18next.t("DEPARTMENTS21"));
      $("#DEPARTMENTS18").attr("value", i18next.t("DEPARTMENTS18"));
      $("#DEPARTMENTS19").attr("value", i18next.t("DEPARTMENTS19"));
      $("#DEPARTMENTS20").attr("value", i18next.t("DEPARTMENTS20"));
      $("#DEPARTMENTS21").attr("value", i18next.t("DEPARTMENTS21"));
      $("#DEPARTMENTS22").html(i18next.t("DEPARTMENTS22"));
      $("#DEPARTMENTS23").html(i18next.t("DEPARTMENTS23"));
      $("#DEPARTMENTS24").html(i18next.t("DEPARTMENTS24"));
      $("#DEPARTMENTS25").html(i18next.t("DEPARTMENTS25"));
      $("#DEPARTMENTS26").html(i18next.t("DEPARTMENTS26"));
      $("#DEPARTMENTS27").html(i18next.t("DEPARTMENTS27"));
      $("#DEPARTMENTS28").html(i18next.t("DEPARTMENTS28"));
      $("#DEPARTMENTS29").html(i18next.t("DEPARTMENTS29"));
      $("#DEPARTMENTS30").html(i18next.t("DEPARTMENTS30"));
      $("#DEPARTMENTS31").html(i18next.t("DEPARTMENTS31"));
      $("#DEPARTMENTS32").html(i18next.t("DEPARTMENTS32"));
      $("#DEPARTMENTS33").html(i18next.t("DEPARTMENTS33"));
      $("#DEPARTMENTS34").html(i18next.t("DEPARTMENTS34"));
      $("#DEPARTMENTS35").html(i18next.t("DEPARTMENTS35"));

      $("#DEPARTMENTS36").html(i18next.t("DEPARTMENTS36"));
      $("#DEPARTMENTS37").html(i18next.t("DEPARTMENTS37"));
      $("#DEPARTMENTS38").html(i18next.t("DEPARTMENTS38"));
      $("#DEPARTMENTS39").html(i18next.t("DEPARTMENTS39"));
      $("#DEPARTMENTS40").html(i18next.t("DEPARTMENTS40"));
      $("#DEPARTMENTS41").html(i18next.t("DEPARTMENTS41"));
      $("#DEPARTMENTS42").html(i18next.t("DEPARTMENTS42"));
      $("#DEPARTMENTS43").html(i18next.t("DEPARTMENTS43"));
      $("#DEPARTMENTS44").html(i18next.t("DEPARTMENTS44"));
      $("#DEPARTMENTS45").html(i18next.t("DEPARTMENTS45")); 
      $("#DEPARTMENTS46").html(i18next.t("DEPARTMENTS46"));
      $("#single").attr("value", i18next.t("single"));
      $("#married").attr("value", i18next.t("married")); 
      $("#DEPARTMENTS47").html(i18next.t("DEPARTMENTS47"));

      $("#DEPARTMENTS48").html(i18next.t("DEPARTMENTS48"));
      $("#DEPARTMENTS49").html(i18next.t("DEPARTMENTS49"));
      $("#DEPARTMENTS50").html(i18next.t("DEPARTMENTS50"));
      $("#DEPARTMENTS51").html(i18next.t("DEPARTMENTS51"));
      $("#DEPARTMENTS52").html(i18next.t("DEPARTMENTS52"));
      $("#DEPARTMENTS53").html(i18next.t("DEPARTMENTS53"));
      $("#DEPARTMENTS54").html(i18next.t("DEPARTMENTS54"));
      $("#DEPARTMENTS55").html(i18next.t("DEPARTMENTS55"));
      $("#DEPARTMENTS56").html(i18next.t("DEPARTMENTS56"));
      $("#DEPARTMENTS57").html(i18next.t("DEPARTMENTS57"));
      $("#DEPARTMENTS58").html(i18next.t("DEPARTMENTS58"));
      $("#DEPARTMENTS59").html(i18next.t("DEPARTMENTS59"));
      $("#DEPARTMENTS60").html(i18next.t("DEPARTMENTS60"));
      $("#DEPARTMENTS61").html(i18next.t("DEPARTMENTS61"));
      $("#DEPARTMENTS62").html(i18next.t("DEPARTMENTS62"));
      $("#INDEXLOAN1").html(i18next.t("INDEXLOAN1"));
      $("#INDEXLOAN2").html(i18next.t("INDEXLOAN2"));
      $("#INDEXLOAN3").html(i18next.t("INDEXLOAN3"));
      $("#INDEXLOAN4").html(i18next.t("INDEXLOAN4"));
      $("#INDEXLOAN5").html(i18next.t("INDEXLOAN5"));
      $("#INDEXLOAN5QS").html(i18next.t("INDEXLOAN5"));
      $("#INDEXLOAN6").html(i18next.t("INDEXLOAN6"));
      $("#INDEXLOAN7").html(i18next.t("INDEXLOAN7"));
      $("#INDEXLOAN8").html(i18next.t("INDEXLOAN8"));
      $("#INDEXLOAN9").html(i18next.t("INDEXLOAN9"));
      $("#INDEXLOAN10").html(i18next.t("INDEXLOAN10"));
      $("#INDEXLOAN10X").html(i18next.t("INDEXLOAN10"));
      $("#INDEXLOAN11").html(i18next.t("INDEXLOAN11"));
      $("#INDEXLOAN10XX").html(i18next.t("INDEXLOAN10"));
      $("#INDEXLOAN11XX").html(i18next.t("INDEXLOAN11"));
      $("#INDEXLOAN11X").html(i18next.t("INDEXLOAN11"));
      $("#INDEXLOAN12").html(i18next.t("INDEXLOAN12"));
      $("#INDEXLOAN12X").html(i18next.t("INDEXLOAN12"));
      $("#INDEXLOAN13").html(i18next.t("INDEXLOAN13"));
      $("#INDEXLOAN14").html(i18next.t("INDEXLOAN14"));
      $("#INDEXLOAN15").html(i18next.t("INDEXLOAN15"));
      $("#INDEXLOAN16").html(i18next.t("INDEXLOAN16"));
      $("#INDEXLOAN17").html(i18next.t("INDEXLOAN17"));
      $("#INDEXLOAN18").html(i18next.t("INDEXLOAN18"));
      $("#INDEXLOAN19").html(i18next.t("INDEXLOAN19"));
      $("#INDEXLOAN20").html(i18next.t("INDEXLOAN20"));
      $("#INDEXLOAN21").html(i18next.t("INDEXLOAN21"));
      $("#INDEXLOAN22").html(i18next.t("INDEXLOAN22"));
      $("#INDEXLOAN23").html(i18next.t("INDEXLOAN23"));
      $("#INDEXLOAN24").html(i18next.t("INDEXLOAN24"));
      $("#INDEXLOAN25").html(i18next.t("INDEXLOAN25"));
      $("#INDEXLOAN26").html(i18next.t("INDEXLOAN26"));
      $("#INDEXLOAN27").html(i18next.t("INDEXLOAN27"));
      $("#INDEXLOAN28").html(i18next.t("INDEXLOAN28"));
      $("#INDEXLOAN29").html(i18next.t("INDEXLOAN29"));
      $("#INDEXLOAN30").html(i18next.t("INDEXLOAN30"));
      $("#INDEXLOAN31").html(i18next.t("INDEXLOAN31"));
      $("#INDEXLOAN32").html(i18next.t("INDEXLOAN32"));

      $("#INDEXLOAN19X").html(i18next.t("INDEXLOAN19X"));

      $("#INDEXLOAN19XW1").html(i18next.t("INDEXLOAN19X"));
      $("#INDEXLOAN19XW2").html(i18next.t("INDEXLOAN19X"));
      $("#INDEXLOAN19XW3").html(i18next.t("INDEXLOAN19X"));
      $("#INDEXLOAN19XW4").html(i18next.t("INDEXLOAN19X"));
      $("#INDEXLOAN20X").html(i18next.t("INDEXLOAN20X"));
      $("#INDEXLOAN21X").html(i18next.t("INDEXLOAN21X"));
      $("#INDEXLOAN22X").html(i18next.t("INDEXLOAN22X"));
      $("#INDEXLOAN23X").html(i18next.t("INDEXLOAN23X"));
      $("#INDEXLOAN24X").html(i18next.t("INDEXLOAN24X"));
      $("#INDEXLOAN25X").html(i18next.t("INDEXLOAN25X"));
      $("#INDEXLOAN26X").html(i18next.t("INDEXLOAN26X"));
      $("#INDEXLOAN27X").html(i18next.t("INDEXLOAN27X"));
      $("#INDEXLOAN28X").html(i18next.t("INDEXLOAN28X"));

      $("#INDEXLOAN19XX").html(i18next.t("INDEXLOAN19XX"));
      $("#INDEXLOAN20XX").html(i18next.t("INDEXLOAN20XX"));
      $("#INDEXLOAN21XX").html(i18next.t("INDEXLOAN21XX"));
      $("#INDEXLOAN22XX").html(i18next.t("INDEXLOAN22XX"));
      $("#INDEXLOAN23XX").html(i18next.t("INDEXLOAN23XX"));
      $("#INDEXLOAN24XX").html(i18next.t("INDEXLOAN24XX"));
      $("#INDEXLOAN25XX").html(i18next.t("INDEXLOAN25XX")); 
      $("#INDEXLOAN26XX").html(i18next.t("INDEXLOAN26XX"));
      $("#INDEXLOAN27XX").html(i18next.t("INDEXLOAN27XX"));
      $("#INDEXLOAN28XX").html(i18next.t("INDEXLOAN28XX"));

      $("#INFOLOAN1").html(i18next.t("INFOLOAN1"));
      $("#INFOLOAN2").html(i18next.t("INFOLOAN2"));
      $("#INFOLOAN3").html(i18next.t("INFOLOAN3"));
      $("#INFOLOAN4").html(i18next.t("INFOLOAN4"));
      $("#INFOLOAN5").html(i18next.t("INFOLOAN5"));
      $("#INFOLOAN6").html(i18next.t("INFOLOAN6"));
    }   
    // Récupérer la langue sélectionnée à partir du stockage local
    var selectedLanguage = localStorage.getItem('selectedLanguage');
   //document.getElementById('lgId').innerHTML = `${selectedLanguage}`
    if (selectedLanguage) {
      // Changer la langue selon la valeur récupérée
      $("#language-select").val(selectedLanguage);
      i18next.changeLanguage(selectedLanguage);
    }
  // Écoutez l'événement personnalisé "translateClicked"
  document.addEventListener('translateClicked', () => {
    // Appelez la fonction de traduction lorsque l'événement est déclenché
    translateFunction();
    Swal.update({
      confirmButtonText: i18next.t('IDTRANSLATE6WXQSDF', { lng: selectedLanguage })
  });
  });
  
  // Définissez votre fonction de traduction
  function translateFunction() {
    var selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
     
      i18next.changeLanguage(selectedLanguage);
    }
    i18next.changeLanguage(selectedLanguage, function(err, t) {
      if (err) return console.error(err);
      translatePage();
    });
    console.log('Fonction de traduction appelée !');
  {/*setTimeout(()=>{
    Swal.update({
      confirmButtonText: i18next.t('IDTRANSLATE6WXQSDF', { lng: selectedLanguage })
  });
  }, 100)*/}
  }
    // Écouteur d'événement pour changer la langue
    $("#language-select li").on("click", function() {
      var selectedLanguage = $(this).find("img").attr("alt");
      const urlParams = new URLSearchParams(window.location.search);
      const selectedLanguagex = urlParams.get("lg");
       if(selectedLanguagex){
        const urlParamsx = new URLSearchParams(window.location.search);
        urlParamsx.set('lg', selectedLanguage);
        window.location.search = urlParamsx.toString();
        // Enregistrer la langue sélectionnée dans le stockage local
        localStorage.setItem('selectedLanguage', selectedLanguage);
        $('#language-select').hide();
        //location.reload();
        // Changer la langue avec i18next
        i18next.changeLanguage(selectedLanguage, function(err, t) {
        if (err) return console.error(err);
        translatePage();
      });
       }else{
        var selectedLanguage = $(this).find("img").attr("alt");
        // Enregistrer la langue sélectionnée dans le stockage local
        localStorage.setItem('selectedLanguage', selectedLanguage);
        $('#language-select').hide();
        location.reload();
        // Changer la langue avec i18next
        i18next.changeLanguage(selectedLanguage, function(err, t) {
        if (err) return console.error(err);
        translatePage();
      });
      }
  });
  
  });