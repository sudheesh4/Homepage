
    var selected="p0";
    var tprojs=["p0","p1","p2",,"p3"];
    var DATA=["Academic", "Data-Science", "Math","Software"];
    var DETAILS=[
    //"Through my research in various physical systems, I have improved my understainng of how mathematical modelling helps us understand physical aspects of reality, and consqeutnly the physical behaviur of different contexts. I have explored physics in the following domains in varying extents. I have worked on modelling theoretical quantum-sensors by utilising the nanomechanical properties of resonators, wherein the 'chaotic' dynamics of an oscillating nanomechanical beam enhances the coherence between two 'qubits' (the analogue of classical bit for quantum-computation).   I have worked on investigating the properties of fluids which have additional 'active' response to strain, through nontrivial stress geometry of the system; This gives rise to novel physics, which can be squared neatly with the physical intuition, giving some insights into self-organisation in different systems. I have also worked on designing cavity-polariton based quantum-simulator of models used in condensed matter. These designs are used to understand properties (like electrical transport in media) using photons.    ",
    "Through my diverse research endeavors, I've deepened my understanding of how mathematical modeling elucidates physical phenomena across various contexts. My investigations span several domains: from modeling theoretical quantum sensors leveraging nanomechanical resonators to enhance qubit coherence, to exploring fluids with active responses to strain, yielding insights into self-organization. Additionally, I've contributed to designing cavity-polariton quantum simulators for condensed matter models, employing photons to probe properties like electrical transport.",
    "In my quest to comprehend data-driven decision-making and operational optimization in businesses, I analyzed a supermarket dataset to uncover transactional trends, focusing on sales and profit dynamics. Customer segmentation revealed revenue insights, while examining annual yield distribution highlighted varied growth paths across product categories. Monthly variations disclosed seasonal demand patterns, informing strategies like optimized inventory restocking and targeted marketing. Instagram reach data uncovered metric correlations, aiding engagement strategies. Exploring machine learning in stock analysis revealed volatility's impact on modeling, while portfolio optimization emphasized maximizing ROI and covariance matrix analysis. Rigorous backtesting and modular Python architecture showcased promising outcomes for future strategy integration.",
  //  "In my journey to understand the intricacies of data-driven decision-making and operational optimization within businesses, I analyzed a publicly available dataset from a supermarket to unveil transactional trends, focusing on sales and profit dynamics. Segmentation of customers by purchasing behaviors offered insights into revenue streams, while examining annual yield distribution highlighted divergent growth trajectories across product categories. Exploring monthly variations revealed seasonal demand-supply patterns, informing operational strategies like optimized inventory restocking and targeted marketing campaigns. Similarly, leveraging data from Instagram reach statistics underscored correlations between metrics, aiding content creators in optimizing engagement strategies. Furthermore, delving into machine learning applications in stock market analysis unveiled the impact of volatility on predictive modeling accuracy, while exploring portfolio optimization strategies highlighted the importance of maximizing Return on Investment (ROI) and covariance matrix analysis. Through rigorous backtesting and modular Python architecture implementation, these endeavors demonstrated promising outcomes, paving the way for future iterations and integration of additional strategies with minimal adjustments.",
    "Exploring mathematical ideas, recreationally, using programming has been an enriching activity for my sensibilities. An inexhaustible list of the directions that I have explored are as follows. From exploring simple functions to unraveling complex dynamics, mathematics offers a journey of discoveries. Implicit equations reveal geometric insights, while concepts like integrability shed light on system dynamics from a qualitative point of view. Dynamical systems has ubiqutous features like the Lorenz attractor that illustrate scalar interdependence. Quantum computing is an emerging paradigm of computation with promising intersection with machine learning. The Abelian sandpile model exemplifies self-organized criticality, a phenomenon that cuts across domains and is widespread in science of complex systems. The Korteweg–De Vries equation unveils soliton solutions, encapsulating mathematical beauty and complexity even in nonlinear behaviours.",
   // "Creating softwares and small applications for personal use-cases, has informed my design sensibilities specifically, and system-thinking in general. I have primarily worked on applications based on python, for abput 10 years. I have employed various services (APIs and third-party modules) to implement different techniques like web-scraping, scietific-computation, network communication. Over the years working on these projects has helped me improve my own programming practices as well, for instance improving data-management in complex modules, optimising code by breaking it into modular pieces, improving documentaion and adhering to conventions of coding. I have also worked in web-development which has familiarised me with the approaches used to design user-interfaces. I have worked with technologies like REACT.JS, REDUX. I understand the software-development cycle and am reasonably familiar with testing and debugging that goes into pre-production release.  ",
   "Over the past decade, my experience in software development, primarily focused on Python, has honed my design sensibilities and system-thinking skills. I've leveraged various services such as APIs and third-party modules to implement diverse techniques like web-scraping, scientific computation, and network communication. Throughout these projects, I've refined my programming practices, including data management, modular code design, documentation, and adherence to coding conventions. Additionally, my involvement in web development, utilizing technologies like React.js and Redux, has deepened my understanding of user interface design. Familiarity with the software development lifecycle, along with testing and debugging methodologies, rounds out my skill set for efficient pre-production release."
   ];
    var DETAILS2=[
    [["Nonlinear entanglement dynamics","Explored the quantum realm of the kicked top model, revealing a symmetry connection between entanglement and classical dynamics."],
    ["Generation of coherence in an exactly solvable nonlinear system, involving a nitrogen-vacancy (NV) center interacting with a nanomechanical oscillator."],
    ["Broken parity physics","Modulation instability in parity broken fluids and dielectrics",
    "Studied wave cascades in turbulent flows. Investigated energy transfer mechanisms through inverse and direct cascades.",],
    ["Polariton based condensed matter quantum simulator","Explored polaritons as a platform for quantum simulators."]],
    [["Segmentation analysis","Conducted analytical investigation using a publicly available dataset from a supermarket to discern transactional trends and insights into revenue streams."],
    ["Feature correlations and selection","Examined correlations between different post metrics of an Instagram account to uncover user engagement behaviors."],["Stock trend analysis. Assessed the impact of volatility on modeling accuracy in predicting stock market trends."],
    ["Portfolio optimization strategies.","Explored portfolio modeling and optimization strategies focusing on maximizing Return on Investment (ROI)."]
    ],
    [//["Complex and real analysis of functions","Explored the geometrical and algebraic representation of shapes, specifically focusing on the circle and torus."],
    ["Dynamical systems","Studied the simplicity of integrable systems in phase-space and the emergence of stochastic regions with breaking integrability.","Complexity of dynamical attractors using Time-delayed embedding.","Investigated the Abelian sandpile model as an example of self-organized criticality in complex systems."],
    ["Explored the intersection of quantum computing and machine learning by implementing a binary classifier for the iris dataset using a quantum circuit."],
    ["And others!"]],
    [["Familiar with web-scraping, scientific-computation and application development. Primarily comfortable with python."],
    ["Experience with web-development and AGILE based software-engineering methodology."],
    ["Machine un-learning on MNIST dataset"],
    ["Implemented (RAG based) LLM integrated services. ('Chat-with-a-philosopher' , 'Document quiz-feedback'...) "],
    [" For more information  : <a  href='https://github.com/sudheesh4'><b>github/@sudheesh4</b></a>."],
    ]
    ];
    var IMAGES=["NL_AA.png","portfolio_backtest.png","qcmp.png","docquiz.png"];
    
    var IMGDETS=["Cavity-Polariton based quantum-simulator benchmarking.",
    "Cummulative-return performance, for sample portfolio optimisation strategies, in backtesting .",
    "Sample quantum-circuit used for binary-classification on IRIS dataset",
    "Document quiz software: upload documents and get quized along with recieving a feedback."    
    ];
    
    
    function getdetlist(x){
    var ll="<ul> ";
    for(var i=0;i<DETAILS2[x].length;i++)
    {
    var temp="<ul>";
    for(var j=1;j<DETAILS2[x][i].length;j++)
        {
        temp=temp+"<li>"+DETAILS2[x][i][j]+"</li>";
        }
        temp=temp+"</ul>";
        ll=ll+"<li>"+DETAILS2[x][i][0]+temp+"</li>";
    }
    ll=ll+"</ul>";
    return ll
    
    }
    
    

    var bods="<ul>    <li><h5>Segmentation analysis</h5><p>In my pursuit of unraveling the intricacies of data-driven decision-making and operational optimization within businesses, I embarked on an exploration aimed at deciphering the narratives embedded within various documented metrics pertaining to consumer-company interactions. Leveraging a publicly available dataset sourced from a supermarket, I conducted an analytical investigation to discern transactional trends, specifically focusing on sales and profit dynamics within the company's operations. The process involved the segmentation of customers based on their purchasing behaviors, offering valuable insights into the revenue streams fueling the supermarket's growth.</p><img class='dets_im' src='img/data/profit_segment.png'>&nbsp&nbsp  &nbspSegmentation of store's revenue</img><img class='dets_im' src='img/data/profir_category.png'></img><p> Additionally, an analysis of annual yield and its distribution shed light on the divergent growth trajectories observed across distinct product categories, thereby highlighting key revenue-generating assets within the supermarket's portfolio. Furthermore, delving into the monthly variations of specific product classes unveiled discernible patterns indicative of seasonal fluctuations in demand-supply dynamics.<br><img class='dets_im' src='img/data/monthly_tech.png'>&nbspMonthly variation of revenue for a specific category.</img> <p>These insights carry significant implications for operational optimization strategies within the supermarket. For instance, leveraging such insights facilitates the optimization of inventory restocking frequencies for various products, enabling a more balanced and efficient allocation of fiscal resources. By transitioning towards a fluid and consistent approach to replenishment, the supermarket can alleviate the strain associated with sporadic inventory fluctuations. Moreover, utilizing demand-supply variations to inform targeted marketing campaigns allows for the strategic promotion of products experiencing heightened demand during specific periods of the year. This proactive approach to marketing endeavors has the potential to catalyze sales by capitalizing on emerging consumer trends and preferences.</p> </li> <li> <h5>Feature correlations</h5> <p> To explore how data can enhance content engagement, I delved into publicly available data concerning the reach statistics of an Instagram account. By examining correlations between different post metrics, my aim was to uncover patterns shedding light on user engagement behaviors. The analysis revealed intriguing insights, notably highlighting strong correlations between certain metrics. For instance, there was a pronounced correlation between post impressions and likes, indicating a significant association between visibility and user interaction.</p><img class='dets_im' src='img/data/likeimpression.png'>Correlations between impressions and likes. </img><br><p> Conversely, the correlation between comments and hashtags suggested a potentially deeper level of engagement facilitated by content categorization. These findings underscore the value of data-driven approaches in crafting effective content strategies. By leveraging insights derived from data analysis, content creators can better understand how attention flows within the social media landscape, thereby enabling them to optimize their content delivery channels for enhanced audience engagement. </p> <img class='dets_im' src='img/data/insta_metrics.png'> &nbsp Correlation matrix for various features </img></li>  <li><h5>Stock trend prediction using random-forest-classifers</h5> <p>In an endeavor to explore the application of machine learning (ML) in uncovering market dynamics, I undertook an analysis to assess the impact of volatility on modeling accuracy. This endeavor involved examining the volatility of stocks across varying timeframes, ranging from 2 days to 1000 days. By augmenting the dataset with volatility metrics, my aim was to evaluate the efficacy of a random forest classifier in predicting market trends. Volatility serves as a pivotal indicator of a stock's fluctuation magnitude over a specified period. Stocks characterized by high volatility exhibit more pronounced price fluctuations compared to their low-volatility counterparts. Volatility over various periods of time can help us understand the different scales of dynamics a particular stock may be driven by in the market.</p>        <img class='dets_im' src='img/data/volat_log.png'>Volatility over varying periods for a ticker.</img><br><p>Initially, employing only the running trend and close-ratio yielded a precision rate of 58% during backtesting. However, incorporating volatility alongside these parameters resulted in a notable improvement, elevating the precision rate to 60%. This 2% enhancement was achieved with minimal computational overhead, underscoring the efficacy of leveraging volatility metrics in refining predictive modeling strategies and capturing broader correlations.        </p>         <img class='dets_im' src='img/data/rforestcmp.png'>Random forest classifier prediction of stock trend.<br> Left: target;  Middle: just learning trends and ratios;  Right: learning volatility features.</img><br></li>    <li>  <h5>Portfolio optimisation strategies</h5><p>To comprehend the intricacies of portfolio modeling and optimization, I immersed myself in a spectrum of strategies delineated within financial literature. The primary objective of optimization revolved around maximizing Return on Investment (ROI) across diverse time frames, with a particular focus on a 100-day horizon. Utilizing ROI as a pivotal metric offers a robust framework for evaluating the growth potential of individual stocks, thereby furnishing insights into their holistic performance dynamics over time. In the optimization endeavor of a multi-asset portfolio, thorough scrutiny of the covariance matrix (returns matrix) associated with the assets ensued. Harnessing the inverse of the covariance matrix facilitated the execution of a minimum-variance strategy, aimed at mitigating portfolio risk while concurrently enhancing returns. Furthermore, leveraging the eigen-properties of the covariance matrix paved the way for deploying an eigen-strategy, thus augmenting the diversification of the optimization approach. <br>   <img class='dets_im' src='img/data/ROI.png'>&nbsp ROI over 100 days for different stocks. </img><br>Subsequent to rigorous backtesting, these optimization strategies showcased promising outcomes, yielding satisfactory returns. Moreover, during the process, I established a modular Python architecture to implement the procedure systematically, thereby ensuring flexibility for future iterations and the seamless integration of additional strategies with minimal adjustments. <img class='dets_im' src='img/data/portfolio_backtest.png'>&nbspComparison of portfolio optimization strategies.</img>   </li></ul> ";
    var borm=`<ul> 
    <li>
    <h5>Complex analysis with functions!</h5>
    <p>
    Even simple looking functions can transition into one another so surprisingly!
If you consider a line, then that line is well defined algebraically and unambigously as f(x)=x^1, or one of it's shifted/transformed cousin.
Extending the representation to complex numbers, i.e. letting x take on complex values as well, gives insight as to how curves transform as the expoenent of dependence of f(x) on x changes.
Representing f(x) in such a way is not an issue, as f(x)=x^1 is well defined on all realnumbers.
So moving x in a complex circle just leads to an expanded circular motion of the behaviour of f(x).
However, when we consider f(x)=x^2, which is also well-defined on all realnumbers, we see a cusp forms in f(x)'s behaviour. This is can be understood by recalling the periodicity of complex numbers in their arguments.
Interesting 'non-analyticity' of sorts in f(x)'s behaviour emerges when the expoenent is not integer, in such cases the f(x) maybe well-defined in positive Real axis but may have complex behaviour in the negative real part. As a consequence of this, the circular behaviour of x in complex plane may give rise to changing of branch of the function and not returning back to the original point.
    </p>
    <br>
    <img class='dets_im' src='img/math/analyticity_x.png'> &nbsp y=x^1</img>
        <br>
        <img class='dets_im' src='img/math/analyticity_x2.png'> &nbsp y=x^2</img>
            <br>
            <img class='dets_im' src='img/math/analyticity_x14.png'> &nbsp y=x^1.4</img>
    </li>
    
    <li>
    <h5>N-Torus?</h5>
    
    <p>
    The geometrical and algebraic representation of circle is pretty well known.
x^2 + y^2 - 1 = 0
All others are translated and transformed cousins of this same circle.
However other shapes aren't so well known.
I thought I can easily give rise to geometrical representation of circle shape using the implicit algebraic knowledge i have, which should be generalisable to other shapes. I didn't want to use any reparameterisation of coordinates, and just wanted to use the plain old cartesian representation.
	Circle:
		Implicit equation: F(x,y)-r=0 ==> x^2 + y^2 - 1 = 0
	Torus:
		Implicit equation: G(x,y,z)-r=0 ==>  ?

And I found a way on the great-internet to generate an implicit euqation for n-torus in a systematic way!
An example:
		G(x,y,z)-r= z^2 + (x(x-2)(x-1)^2+y^2)^2 -r=0

The recipe suggests considering a polynomial of x  such that
		p(x)=x(x-1)^2 (x-2)^2 .... (x-n+1)^2 (x-n)
then the level-set of the following function would give n-torus
		G(x,y,z)= [p(x) + y^2]^2 + z^2 -r=0
where introduction of the third dimension is facilitated through an 'inflation' step of using an appropriate regulator 'r'.

</p>
    <br>
    <img class='dets_im' src='img/math/torus.png'> &nbsp Torus and 2-Torus using the 'inflation' procedure.</img>
<p>
I tried out such an inflationary painiting of shapes for various G(x,y,z)'s. 
Another example that looked curious and cool was the devil's curve==> y^2 (y^2 - b^2) - x^2(x^2 - a^2) =0 
    </p>
      <br>
      <img class='dets_im' src='img/math/devilscurve.png'> &nbsp Devil's curve under 'inflation' procedure.</img>

    </li>
    
    <li>
    <h5>Integrability in dyamical systems</h5>
    
    <p>
    

Integrability of a system is a cruical concept in classical physics and dynamical systems. In a very broad way it tries to capture the complexity of dynamics in the system. Integrable systems are simple in that there may be description that significantly simplify the geometrical repreentation of the dyncamics. Integrable systems have a neat correspondance between their dynamic degrees-of-freedom and the aspects of system that remain invariant/conserved. 
Typically the geometricalspace in which integrability is characterised is the construction of phase-space, which is just the collection of all possible dynamical states of a system, endowed with additional metric and structures. When the system changes it basically tranverses this phase-space. Moreover, in this space integrable systems have simple shapes describing the dynamics of system. However, breaking integrability leads to interesting shapes to emerge. Different systems can have different phase-space potraits depending on various factors in the systems. With the breaking of integrability, emergence of stochastic regions also takes place in the phase space. 
</p>
<br>
<img src='img/math/integr2.png' class='dets_im'> Quasi-integrable phase structure in a classical dynamical map.</img>
<br>
<p>
An example of Henon-Hales system has been shown, where initally the integrability is lightly broken, so there are non trivial shapes in the phase-potrait, but the more it gets broken the more these regions are lost to stochastic regions. This happens because the quasi-steady regions which emerge act like dynamical attractirs in phase-space, and they lose stability as non-integrability sets in. 


    </p>
    <br>
    <img src='img/math/integr2(1).png' class='dets_im'></br> Integrability breaking in phase space and emergence of stochasticity.</img>
    <br>
    </li>
    
    <li>
    <h5>Complexity of dynamical attractors: Time-delayed embedding</h5>
    <p>
In dynamical systems Lorenz-attractor is a famous pedagogical example of complex dynamics. It refers to a geometrical 3-d shape which resembles a butterfly's wings. It was uncovered when Lorenz investigated the dynamics of Earth's atmosphere. The associated dynamical system meaning behind it can be understood as 3 seperate degrees-of-freedoms of a system changing in a way that the tupple of their values remain on this shape, or close to it. So if we start with a system-state thats close to it but not on the shape, it'll get attracted to it and stay on the shape. These attractors carry the interdepence of the three seperate scalar variables. However, under some conditions, it is possible to reconstruct the topology of such a complex-attractor using just one of the scalar data. Such a method is called time-delay embedding.
</p><br><img src='img/math/lorenz.png' class='dets_im'> Lorenz attractor </img><br>An example has been shown where using just X and it's time-delayed version we can reconstruct the topolgical shape of attractor X is complexy-ly tied to in (X,Y,Z) shape.
    </p><br><img src='img/math/lorenz_scalar.png' class='dets_im'>Data of single scalar variable of the Lorenz system</img>
 <br><img src='img/math/lorenz_timelagged.png'  class='dets_im'>Attractor from scalar time-lagged data</img>
    </li>    <li><h5> Quantum Machine-Learning: Binary classifaction</h5>
    <p>    Quantum computation is widely finding new theoretical usecases.     Quantum circuits have also been investigated to serve as archetectures for ML applications.     To understand how that idea might be worked out, i tried to make a binary-classifer for iris dataset using quantum-circuit. The idea was to use a quantum circuit, encode input iris parameters as      qubit-state, and then apply the circuit on it to produce a binary classifcation result.     The circuit consists of various rotations-gates, whose parameters are then classically      learnt through training using a loss-optimiser. I was able to get 78% in binary classifcation       with this procedure, which is not very ground-breaking, but serves as a proof-of-concept of potential  intersection of ML and Quatnum-computing.</p>    <br>    <img src='img/math/qcmp.png'  class='dets_im'></li>
    
    <li>
    <h5>Self-organise criticality in sandpiles</h5>
    
    <p>
    Abelian sandpile model is a prototypical example of self-organised-criticality in complex systems. 
Sef-organised-criticality is the idead that in large complex systems, the dynamics can be attracted to a critical state where in a large scale spatial and temporal orchestrated 'coordination' of sorts emerges.
Sandpile a typical example of such a model, where we drop sand particle by particle on a grid with rules for sand to spill over onto neighbours on grid. This leads to interesting patterns as sand keeps falling. Coordinated avalanches a can be observed.
    </p>
    <br><img src='img/math/sand_0.png' class='dets_im'></img><img src='img/math/sand_1.png' class='dets_im'></img><img src='img/math/sand_2.png' class='dets_im'>
    </img><img src='img/math/sand_3.png' class='dets_im'></img><img src='img/math/sand_4.png' class='dets_im'>
    <br>Abelian sandpile model at varous time steps.</img>
    <br><img src='img/math/sand_fnl.png' class='dets_im'><br>long time non-equlibrium 'steady state' of sandpile</img>
    <br><img src='img/math/sand_hst.png' class='dets_im'>Distribution of fluctuations </img>
    </li>
    </ul>`;
    
    var boss=`
    <ul>
    <li>
    <h5>Chat-with-a-philosopher</h5>
    <p>
    Collated high quality and factually associated data about some curious thinkers.
     Organised data, along with meta-information into relevant vector-database which was used to power a chatbot.
     Also extended it by finetuning a 7B variant of Llama2 to improve 'in-database' performance.
    </p>
    </li>
    <li>
    <h5>Document summariser</h5>
    <p>A mobile internet service to upload any document and generate summary page by page. Simple RAG implementeation, for a proof of concept service.
    Check it out <a class="hyper"  href="https://docsumm.streamlit.app/" target="_blank"><b><u>HERE</u></b></a></p>
   
    </li>
    
        <li>
        <h5>Machine Un-learning</h5>
        <p>
        Explored a specific protocol to implement machine un-learning, i.e. remove the 'learned' aspect of the model for a specfic part of dataset while maintaining the fidelity for overall model performance.
        Followed ideas from <a class='hyper' href="https://arxiv.org/abs/2111.08947"> <u>Fast Yet Effective Machine Unlearning</u></a> 
        and implemented on MNIST dataset, to understand a proof-of-concept working of the technique. The intuitive understanding that I gained through the process was the idea that model-learning involves random-drifts in the high-dimensional parameter space. These drifts in the training phase are determined by gradient descent fields.
        So intutively, one way to approach machine-unlearning (remove learned aspects for a portion of dataset) is to reverse the 'drifts' corresponding to the specific dataset. This however, isnt so straightforward because of the nonlinear nature of the training flows. Moreover, maintaining fidelity of overall model performance amounts to maintaing
        closeness in the distribution sense, which is also very nontrivial. However, following the mentioned paper, an approach of using noise tailored to data-to-be-forgotten, in an impair-repair fashion can be implemented to execute few-shot unlearning.
            </p>
         <br><img src='img/app/unlearn.png' class='dets_im'><br>Example: Model performance comparison after few-shot 'unlearning' portion of MNIST dataset.</img>
        
       
        </li>
    <li><h5>(Almost) trivial recreations:</h6>
        <p>I tried to generate a rap to keep convey this part of my endeavors...so it is what is I guess?:3
        <br>
        So here's an overview of my software interests and efforts.<br> For more information  :<a class="hyper" href="https://github.com/sudheesh4"><b>github/@sudheesh4</b></a>.
       <br> WARNING: THE FOLLOWING CONTENT IS LLM GENERATED (blame the semantics:3)
        <br>
        "<br>
        Yo, just a coder in the zone, no fame to chase,<br>
From humble C++ games to chat servers, found my place.<br>
Python's my jam, messaging, web apps, keepin' it real,<br>
LLM, RAG queries, in this coding deal.<br>
<br>
Simple games, basic networks, my journey's begun,<br>
Question prep, feedback gen, small victories won.<br>
In this tech world, I'm making strides, no need to boast,<br>
With every line of code, I'm learning the most.<br>
        "<br>
        
        
        </p>
        <p>
     Here are some of my recent recreational applications , Android and standalone Desktop (Windows executable), I worked on
        </p>
        <br><img src='img/app/docquiz.png' class='dets_im'>RAG based application to query documents, generate quiz and feedback.</img>
        <br><img src='img/app/summariser.png' class='dets_im'>RAG based webservice to get summary of documents on fly. Hosted on streamlit.</img>
        <br><img src='img/app/chitti1.jpg' class='dets_im'>Android app to query a flask based LLM engine and function as assistant. Chitti :3</img>
        <br><img src='img/app/chitti2.jpg' class='dets_im'>Paired up with multimodal accessibilities! Talks to you, listens to you and can see what you show!</img>
    </li>
    
  <li>
  <h5>Grokking</h5>
  <p>
  Exploring emergent phenomenon in deep neural networks.    </p>
   <br><img src='img/app/grok.png' class='dets_im'><br>Example: Grokfast algorithm on MNIST[1]</img>
[1]Power, Alethea, et al. "Grokking: Generalization beyond overfitting on small algorithmic datasets." arXiv preprint arXiv:2201.02177 (2022).  
 
  </li>
    </ul>
    `;
    
    var boap=`
    <ul> 
    <li>
    <h4>Nonlinear entanglement and tunneling dynamics in quantum kicked top</h4>
    <p>
  The kicked top model stands as a fundamental tool for probing unresolved quantum mechanical phenomena vis-à-vis classical formulations. 
  In its classical rendition, this model unveils a rich tapestry of dynamics, encompassing regular, bifurcated, mixed, and chaotic behaviors. 
  Our investigation, prompted by prior research[1], delves into the deep quantum realm, where correlations between the classical phase space structure and entanglement dynamics have been scrutinized. Notably, we unveil a striking symmetry connection between the variations in entanglement and classical dynamics, particularly delineating the boundaries of high and low entanglement regions in phase space. Focusing on the entangling quantum kicked top, we narrow our gaze to the few qubit scenario, exploring the nuanced interplay between entanglement and spin-coherent states' initial conditions. Our analysis extends prior findings on tunneling behavior, establishing a clear nexus between entanglement dynamics and tunneling phenomena. Moreover, we elucidate the relationship between classical phase space structures and the initial condition dependence of entanglement oscillations, even in the quantum domain of a few spin-1/2 qubits. Additionally, we delve into the correlations between spectral features and these non-classical dynamics, shedding light on the intricate fabric of quantum entanglement.
   </p>
   <p>
  [1] J. B. Ruebeck, J. Lin, and A. K. Pattanayak, Phys. Rev. E 95, 062222 (2017).

   </p>
    <br>
    <img class='dets_im' src='img/acad/tunnel.png'> &nbsp Dynamical tunneling in quantum kicked-top</img>
        <br>
         <img class='dets_im' src='img/acad/tunnel2.png'> &nbsp Entanglement oscillation (as measured by entropy) associated with dynamical tunneling.</img>
             <br>
    <h5>MORE INFO: &nbsp &nbsp<a class='hyper' target="_blank" rel="noopener noreferrer" href="https://meetings.aps.org/Meeting/MAR24/Session/N00.217" > LINK</a></h5>
       <br>
       <br>
    </li>
    
    <li>
    <h4>Generation of coherence in an exactly solvable nonlinear nanomechanical system</h4>
    <p>
This research investigated the quantum dynamics of a nitrogen-vacancy (NV) center interacting with a nonlinear, periodically driven mechanical oscillator. The mechanical oscillation, influenced by continuous periodic driving contingent upon the oscillator's position, was mathematically described using Mathieu elliptic functions. This framework enabled the analysis of quantum spin dynamics, incorporating environmental factors, and assessing the purity and von Neumann entropy of the NV-spin system. The study addressed the unitary generation of coherence, observing that coherence production via unitary transformation differed based on the system's initial state. Efficiency in coherence production was noted when the system began in the separatrix region, associated with classical dynamical chaos. Leveraging insights from chaos theory, it was demonstrated that quantum chaos and the loss of information about the initial mixed state favored quantum coherence generation. Introducing a quantum distance metric from the homoclinic tangle, it was established that for initial states conducive to efficient coherence generation, this distance was minimized.   </p>

  </p>  <br>
    <img class='dets_im' src='img/acad/purity.png'> &nbsp Purity (as a measure of coherence) evolution in time (under open dynamics), showing enhancement even in presence of reservoir and decoherence</img>
        <br>
        
    <h5>MORE INFO: &nbsp &nbsp<a class='hyper' target="_blank" rel="noopener noreferrer" href="https://journals.aps.org/prb/abstract/10.1103/PhysRevB.101.104311" > LINK</a></h5>
       <br>
       <br>
    </li>
    
        
    <li>
    <h4>Modulation instability in parity broken matter</h4>
    <p>
The phenomenon of Modulation Instability (MI) is pervasive in nature, appearing in various systems such as water waves and lasers, 
albeit under different names. In this study, we delved into the interaction between MI and parity breaking, particularly odd-viscosity effects,
 within a hydrodynamic framework of surface gravity waves. By employing a power counting scheme and utilizing derivative expansion techniques, 
 we derived a generalized nonlinear Schrödinger equation (NLSE) incorporating odd-viscosity-dependent stability criteria
  for amplitude modulation. Our analysis revealed that parity breaking induced asymmetric dispersion,
   leading to distinct stability criteria for left and right moving modes of the NLSE. We examined the growth rate dependence on 
   odd-viscosity and tried to contrast its impact with that of surface tension. We also explored the feasibility 
   of realizing a non-reciprocal optical platform based on the parity odd generalized NLSE derived in the context of surface gravity waves.
  </p>  <br>
    <img class='dets_im' src='img/acad/modu.png'> &nbsp MI leads to breaking of wave-train into smaller ones (as shown), as was first recorded and
     studied in[1].
    
    </img>
      <br>
      
      <p>[1] Benjamin, T.B. (1967). Proceedings of the Royal Society of London. A. Mathematical and Physical Sciences. 299 (1456): 59–76. </p>
        <img class='dets_im' src='img/acad/oddminus.png'> </img>   <br>Parity-modified MI
           <br>
    <h5>MORE INFO: &nbsp &nbsp

    
    <a class='hyper' target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2406.04570" > LINK</a>

    
    </h5>

    <br>
    <br>
    </li>
    
   
       <li><h4>Polariton based condensed matter quantum simulator</h4>
       <p>
  Polaritons, which are a hybrid state of light and matter, have garnered attention as a promising platform for quantum simulators. 
  These quasi-particles possess both light and matter properties, making them well-suited for studying complex quantum phenomena. 
  By manipulating the interactions between polaritons, it is possible to create artificial quantum systems that exhibit behaviors
   similar to those seen in condensed matter physics. We collaborated with experimental group to use polaritons and work out lattice tight-binding models of condensed matter.
   These were meant to be used as proof of concept application of the platform for studying physics (like transport of electron in lattice), at room temperature.
   We were able come up with protocol to use the platform and model physics of Graphene band-structure and also localisation physics of a Generalised Aubry-André (GAA)[1].
  </p>
  <p>[1]Fangzhao Alex An, etal. Phys. Rev. Lett. 126, 040603</p>
       <br>
       <img class='dets_im' src='img/acad/NL_AA.png'> </img>   <br>Polariton based photonic cavity implementing GAA model,
       simulating the physics of localisation, specifically the aspect of mobility-edge.
      
         <br>
       
       <h5>MORE INFO: &nbsp &nbsp
       
       <a class='hyper' target="_blank" rel="noopener noreferrer" href="https://meetings.aps.org/Meeting/MAR23/Session/T65.1" > LINK</a>

       </h5>
       (Arxiv preprint link to be updated)
           <br>
           <br>
       </li>
    
    
           <li><h4>Turbulent wave cascades in parity broken matter</h4>
           <p>
     The concept of turbulent wave cascades is fundamental in elucidating the intricate dynamics of turbulent flows and their possible correlation 
   with or deviation from thermalization. 
   Turbulent wave cascades entail the transfer of energy from large-scale eddies to small-scale eddies within a turbulent flow. 
   This phenomenon occurs through both inverse and direct cascades. 
   In an inverse cascade, energy moves from smaller-scale eddies to larger ones, resulting in an accumulation of energy at larger scales 
   and a redistribution towards lower wavenumbers. Conversely, in a direct cascade, energy transfers from larger-scale eddies to smaller ones, 
   leading to energy dissipation at smaller scales.
    Understanding turbulent wave cascades is pivotal across various domains, including fluid dynamics, atmospheric science, and oceanography. 
    By examining the mechanisms governing wave cascades, it gives insights into energy transfer and dissipation processes in turbulent flows, 
    thus enhancing the accuracy of numerical models and predictive capabilities in turbulent systems.
    We are investigating how cascades get deformed in parity broken wave systems.
          </p>
    
           <br>
           <img class='dets_im' src='img/acad/dualcascade.png'> </img>   <br>Example of power spectrum of a wave system in the dual cascade regime.
           <br> <img class='dets_im' src='img/acad/cascadesf.png'> </img>   <br>Deformation of direct cascade with variation of dispersion
          <br> <img class='dets_im' src='img/acad/thermalisationcasc.png'> </img>   <br>Example of Thermalisation of a perturbed thermal equibrium.
             <br>
<img class='dets_im' src='img/acad/Spectrum_3_7.png'> </img>   <br>
   <br>   <img class='dets_im' src='img/acad/Energy_3_7.png'> </img>   <br>Multi-component MMT
      <br>        
           <h5>MORE INFO:    (Ongoing;)

           </h5>
        
               <br>
               <br>
           </li>

</ul>
        
    
    `;
    
       var FULLDETAILS=[boap,bods,borm,boss];
    document.getElementById("more-dets").addEventListener("click",function(e){
    document.getElementById("details").classList.remove("detailshide");
    // document.getElementById("details-title").innerHTML=DATA[parseInt(document.getElementById(selected).id[1],10)]+" Stuff  ";
    document.getElementById("details").classList.add("detailshow");
    
    
    document.getElementById("details").innerHTML='<div class="details-header">'+DATA[parseInt(document.getElementById(selected).id[1],10)]+' Projects: <h4 class="details-title"></h4><button class="details-close" onclick="closedets()">&times;</button></div><div class="details-body">'+FULLDETAILS[parseInt(document.getElementById(selected).id[1],10)]+'</div>';
     });
     
     
     function customtoggle(c1,c2){//c1 ==>unselected, c2==>selected
         
    document.getElementById(c1).classList.remove("selectedmode");
    document.getElementById(c1).classList.add("unselectedmode");
    document.getElementById(c2).classList.remove("unselectedmode");
    document.getElementById(c2).classList.add("selectedmode");
     }
     
    document.getElementById("more-read").addEventListener("click",function(e){
    
    customtoggle("TLDR","more-read");    
     document.getElementById("project-text").innerHTML= DETAILS[parseInt(document.getElementById(selected).id[1],10)];
    });
    
    document.getElementById("TLDR").addEventListener("click",function(e){

    customtoggle("more-read","TLDR");    
     document.getElementById("project-text").innerHTML= getdetlist(parseInt(document.getElementById(selected).id[1],10));
    });
    
    
    
     document.getElementById("project-details").innerHTML= DATA[parseInt(document.getElementById(selected).id[1],10)]+" Stuff  ";
     document.getElementById("project-text").innerHTML= getdetlist(parseInt(document.getElementById(selected).id[1],10));//DETAILS[parseInt(document.getElementById(selected).id[1],10)];
      document.getElementById("project-img").src= "img/"+IMAGES[parseInt(document.getElementById(selected).id[1],10)];
    document.getElementById("fig-dets").innerHTML= IMGDETS[parseInt(document.getElementById(selected).id[1],10)];
  
        // locate your element and add the Click Event Listener
        document.getElementById("project-list").addEventListener("click",function(e) {
        //console.log(e);
                 document.getElementById("details").classList.remove("detailshow");
                    document.getElementById("details").classList.add("detailshide");
                    
            // e.target is our targetted element.
                        // try doing console.log(e.target.nodeName), it will result LI
            //alert(e.target.parentNode.nodeName);
            if(e.target && e.target.parentNode.nodeName == "LI") {
            
            document.getElementById("project-details").innerHTML=DATA[parseInt(document.getElementById(e.target.parentNode.id).id[1],10)]+" Stuff  ";
                customtoggle("more-read","TLDR");   
                document.getElementById("project-text").innerHTML= getdetlist(parseInt(document.getElementById(e.target.parentNode.id).id[1],10));//DETAILS[parseInt(document.getElementById(e.target.parentNode.id).id[1],10)];
            document.getElementById("project-img").src= "img/"+IMAGES[parseInt(document.getElementById(e.target.parentNode.id).id[1],10)];
 document.getElementById("fig-dets").innerHTML= IMGDETS[parseInt(document.getElementById(e.target.parentNode.id).id[1],10)];

            document.getElementById(selected).childNodes[1].classList.remove("projsel");
            e.target.classList.add("projsel");
            selected=e.target.parentNode.id;
            //console.log(parseInt(document.getElementById(selected).id[1],10))
            
                //alert(e.target.parentNode.id + " was clicked");
               // alert(e.target.id);
            }
        });
        
        function closedets(){
         document.getElementById("details").classList.remove("detailshow");
            document.getElementById("details").classList.add("detailshide");

        }
        
        function cycleproj(){
       // console.log(document.getElementById(selected).id)
       var newp,ch;
       switch(selected){
       case "p0":
        newp="p1"
        ch=1;
        break;
    case "p1":
    newp="p2"
    ch=2;
    break;
    case "p2":
    newp="p3"
    ch=3;
    break;
    case "p3":
    newp="p0"
    ch=0;
    break;
    default:
    break;  
       }
       
 document.getElementById("details").classList.remove("detailshow");
                   document.getElementById("details").classList.add("detailshide");
                   
           
           document.getElementById("project-details").innerHTML=DATA[ch]+" Stuff  ";
            customtoggle("more-read","TLDR"); 
               document.getElementById("project-text").innerHTML= getdetlist(ch);//DETAILS[ch];
           document.getElementById("project-img").src= "img/"+IMAGES[ch];
document.getElementById("fig-dets").innerHTML= IMGDETS[ch];

           document.getElementById(selected).childNodes[1].classList.remove("projsel");
            document.getElementById(newp).childNodes[1].classList.add("projsel");
           selected=newp;

           
        }
