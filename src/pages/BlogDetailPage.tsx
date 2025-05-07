
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Linkedin } from 'lucide-react';

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    title: "Top des 'SOFT SKILLS' en entreprise",
    excerpt: "Découvrez quelles sont les compétences comportementales les plus recherchées...",
    content: `
      <p>Les soft skills, ou compétences comportementales, sont devenues essentielles dans le monde professionnel moderne. Contrairement aux hard skills qui représentent les compétences techniques et mesurables, les soft skills concernent la façon dont vous travaillez et interagissez avec les autres.</p>
      
      <h2>Pourquoi les soft skills sont-elles si importantes ?</h2>
      
      <p>Dans un environnement professionnel en constante évolution, où l'automatisation et l'intelligence artificielle prennent en charge de plus en plus de tâches techniques, les qualités humaines deviennent un facteur de différenciation crucial. Les entreprises recherchent des collaborateurs capables de s'adapter, de communiquer efficacement et de résoudre des problèmes complexes.</p>
      
      <h2>Les soft skills les plus recherchées en 2023</h2>
      
      <h3>1. La communication</h3>
      <p>La capacité à transmettre clairement des idées, tant à l'oral qu'à l'écrit, reste la compétence la plus valorisée. Une bonne communication permet d'éviter les malentendus, de faciliter la collaboration et d'améliorer l'efficacité globale.</p>
      
      <h3>2. L'adaptabilité</h3>
      <p>Face aux changements rapides que connaissent les entreprises, l'adaptabilité est devenue une compétence incontournable. Les professionnels capables de s'ajuster rapidement aux nouvelles situations et d'embrasser le changement sont particulièrement appréciés.</p>
      
      <h3>3. L'intelligence émotionnelle</h3>
      <p>La capacité à reconnaître, comprendre et gérer ses propres émotions, ainsi que celles des autres, constitue une compétence précieuse dans tous les contextes professionnels, et particulièrement pour les postes de management.</p>
      
      <h3>4. La pensée critique</h3>
      <p>L'analyse objective des faits pour former un jugement est essentielle pour résoudre des problèmes complexes et prendre des décisions éclairées.</p>
      
      <h3>5. La créativité</h3>
      <p>La capacité à penser différemment et à trouver des solutions innovantes est de plus en plus valorisée dans un monde où l'innovation est synonyme de compétitivité.</p>
      
      <h2>Comment développer ses soft skills ?</h2>
      
      <p>Contrairement aux idées reçues, les soft skills ne sont pas innées et peuvent être développées tout au long de la vie professionnelle :</p>
      
      <ul>
        <li>Sollicitez régulièrement des feedbacks pour identifier vos axes d'amélioration</li>
        <li>Participez à des formations spécifiques</li>
        <li>Pratiquez régulièrement par des exercices ciblés</li>
        <li>Observez et apprenez des personnes qui excellent dans les compétences que vous souhaitez développer</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Dans un marché de l'emploi de plus en plus compétitif, les soft skills constituent un avantage concurrentiel majeur. Loin d'être secondaires par rapport aux compétences techniques, elles sont devenues des critères décisifs dans les processus de recrutement et d'évolution de carrière.</p>
    `,
    date: "5 janvier 2023",
    author: "Équipe GOLDEV",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "3 min",
    category: "Développement professionnel"
  },
  {
    id: 2,
    title: "Stratégies de recrutement innovantes",
    excerpt: "Comment attirer et retenir les meilleurs talents dans un marché compétitif...",
    content: `
      <p>Le recrutement est devenu un véritable défi pour les entreprises de toutes tailles. Dans un marché où le talent est rare et la concurrence féroce, il est essentiel d'adopter des approches innovantes pour attirer et retenir les meilleurs collaborateurs.</p>
      
      <h2>Les défis du recrutement moderne</h2>
      
      <p>Le marché de l'emploi a profondément changé ces dernières années :</p>
      
      <ul>
        <li>Pénurie de compétences dans de nombreux secteurs</li>
        <li>Exigences accrues des candidats en matière de qualité de vie au travail</li>
        <li>Évolution rapide des compétences requises</li>
        <li>Concurrence internationale pour les talents</li>
      </ul>
      
      <h2>Stratégies innovantes pour un recrutement efficace</h2>
      
      <h3>1. L'inbound recruiting</h3>
      <p>À l'instar de l'inbound marketing, cette approche consiste à attirer naturellement les candidats vers votre entreprise en créant un contenu de qualité et en développant votre marque employeur. L'objectif est que les candidats vous trouvent et souhaitent spontanément vous rejoindre.</p>
      
      <h3>2. Le recrutement par l'IA</h3>
      <p>L'intelligence artificielle peut désormais analyser des milliers de CV en quelques secondes, identifier les candidats correspondant le mieux aux critères recherchés et même prédire leur potentiel de réussite au sein de l'entreprise.</p>
      
      <h3>3. La gamification</h3>
      <p>Intégrer des éléments ludiques dans votre processus de recrutement peut non seulement rendre l'expérience plus engageante pour les candidats, mais aussi vous permettre d'évaluer différemment leurs compétences.</p>
      
      <h3>4. Les assessments basés sur les compétences</h3>
      <p>Plutôt que de se fier uniquement aux diplômes et à l'expérience passée, de plus en plus d'entreprises évaluent directement les compétences des candidats à travers des mises en situation ou des tests pratiques.</p>
      
      <h3>5. Le recrutement collaboratif</h3>
      <p>Impliquer les futures équipes dans le processus de recrutement permet non seulement de mieux évaluer l'adéquation des candidats, mais aussi de favoriser leur intégration future.</p>
      
      <h2>L'importance de l'expérience candidat</h2>
      
      <p>Au-delà des techniques de sourcing, l'expérience offerte aux candidats tout au long du processus de recrutement est devenue cruciale :</p>
      
      <ul>
        <li>Processus clair et transparent</li>
        <li>Communication régulière et personnalisée</li>
        <li>Feedbacks constructifs, même en cas de refus</li>
        <li>Délais de réponse maîtrisés</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Le recrutement ne se résume plus à la simple adéquation entre un CV et une fiche de poste. Il s'agit désormais d'une démarche stratégique qui nécessite créativité, agilité et vision à long terme. Les entreprises qui sauront innover dans ce domaine bénéficieront d'un avantage concurrentiel décisif.</p>
    `,
    date: "10 janvier 2023",
    author: "Équipe GOLDEV",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "4 min",
    category: "Recrutement"
  },
  {
    id: 3,
    title: "L'importance de la formation continue",
    excerpt: "Pourquoi investir dans la formation de vos équipes est essentiel pour...",
    content: `
      <p>Dans un monde professionnel en constante évolution, la formation continue est devenue un pilier essentiel de la stratégie des entreprises qui souhaitent rester compétitives. Loin d'être une simple dépense, elle représente un investissement crucial pour le développement tant des collaborateurs que de l'organisation.</p>
      
      <h2>Pourquoi la formation continue est-elle devenue incontournable ?</h2>
      
      <h3>L'évolution rapide des compétences</h3>
      <p>Selon le Forum Économique Mondial, près de 50% des compétences actuelles deviendront obsolètes d'ici 5 ans. Dans ce contexte, la capacité à se former en continu devient une nécessité pour maintenir son employabilité.</p>
      
      <h3>La transformation digitale</h3>
      <p>La digitalisation touche désormais tous les secteurs d'activité et requiert une adaptation constante des méthodes de travail et des compétences associées.</p>
      
      <h3>Les attentes des nouvelles générations</h3>
      <p>Les millennials et la génération Z placent les opportunités d'apprentissage et de développement parmi leurs principaux critères de choix d'un employeur.</p>
      
      <h2>Les bénéfices de la formation continue pour l'entreprise</h2>
      
      <h3>1. Gain de productivité</h3>
      <p>Des collaborateurs bien formés sont plus efficaces dans leurs missions quotidiennes et peuvent apporter des solutions innovantes aux problématiques rencontrées.</p>
      
      <h3>2. Fidélisation des talents</h3>
      <p>Investir dans le développement des compétences de vos équipes renforce leur engagement et réduit significativement le turnover.</p>
      
      <h3>3. Attractivité employeur</h3>
      <p>Une politique de formation ambitieuse constitue un argument de poids pour attirer de nouveaux talents.</p>
      
      <h3>4. Adaptabilité de l'organisation</h3>
      <p>Une entreprise qui forme régulièrement ses équipes développe une culture de l'apprentissage qui favorise l'agilité face aux changements.</p>
      
      <h2>Quelles modalités de formation privilégier ?</h2>
      
      <p>La formation continue a considérablement évolué ces dernières années, offrant une diversité de formats adaptés aux différents besoins :</p>
      
      <ul>
        <li>Le e-learning et les MOOC pour des formations flexibles et accessibles</li>
        <li>Le blended learning qui combine sessions présentielles et apprentissage à distance</li>
        <li>Les formations immersives utilisant la réalité virtuelle ou augmentée</li>
        <li>Le mentoring et le coaching pour un accompagnement personnalisé</li>
        <li>Les communautés de pratique pour favoriser l'apprentissage collaboratif</li>
      </ul>
      
      <h2>Comment construire une stratégie de formation efficace ?</h2>
      
      <ol>
        <li>Identifier précisément les besoins de compétences actuels et futurs</li>
        <li>Impliquer les collaborateurs dans la définition de leurs parcours de formation</li>
        <li>Privilégier l'apprentissage par la pratique et les mises en situation réelles</li>
        <li>Mesurer régulièrement l'impact des formations sur la performance</li>
        <li>Valoriser et reconnaître les efforts de développement des compétences</li>
      </ol>
      
      <h2>Conclusion</h2>
      
      <p>La formation continue n'est plus une option mais une nécessité stratégique pour les entreprises qui souhaitent prospérer dans un environnement économique incertain et en rapide mutation. Plus qu'un centre de coûts, elle doit être envisagée comme un véritable levier de performance et de transformation.</p>
    `,
    date: "15 janvier 2023",
    author: "Équipe GOLDEV",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "5 min",
    category: "Formation"
  }
];

const BlogDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching a blog post
    setLoading(true);
    const blogId = parseInt(id || "1");
    const foundPost = blogPosts.find(post => post.id === blogId);
    
    if (foundPost) {
      setPost(foundPost);
      // Set page title
      document.title = `${foundPost.title} | GOLDEV Blog`;
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">Chargement...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <Navbar />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Article non trouvé</h1>
            <p className="mb-6">Désolé, l'article que vous recherchez n'existe pas ou a été déplacé.</p>
            <Link to="/blog" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
              Retour au blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with Featured Image */}
        <div className="w-full h-96 relative">
          <div className="absolute inset-0 bg-black/60">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover opacity-75"
            />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 text-white">
              <Link to="/blog" className="inline-flex items-center mb-6 text-white/80 hover:text-white transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour au blog
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center text-sm md:text-base text-white/80">
                <span className="mr-4 flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </span>
                <span className="mr-4 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime} de lecture
                </span>
                <span className="flex items-center">
                  Catégorie: {post.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Article content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Author info */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h2 className="text-lg font-bold">Par {post.author}</h2>
              </div>
              
              {/* Article body */}
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}>
              </div>

              {/* Share section */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Share2 className="h-5 w-5 mr-2" />
                  Partager cet article
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1877F2] text-white p-3 rounded-full hover:opacity-90 transition-opacity"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0A66C2] text-white p-3 rounded-full hover:opacity-90 transition-opacity"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts
                .filter(relatedPost => relatedPost.id !== post.id)
                .slice(0, 3)
                .map(relatedPost => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 text-black">{relatedPost.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{relatedPost.date} • {relatedPost.readTime}</p>
                      <p className="text-gray-600">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
