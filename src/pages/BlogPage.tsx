
import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

// Mock blog post data (using the same data from BlogDetailPage)
const blogPosts = [
  {
    id: 1,
    title: "Top des 'SOFT SKILLS' en entreprise",
    excerpt: "Découvrez quelles sont les compétences comportementales les plus recherchées...",
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
    date: "15 janvier 2023",
    author: "Équipe GOLDEV",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "5 min",
    category: "Formation"
  },
  {
    id: 4,
    title: "Comment développer sa marque employeur",
    excerpt: "Les stratégies efficaces pour attirer et retenir les meilleurs talents...",
    date: "25 janvier 2023",
    author: "Équipe GOLDEV",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "4 min",
    category: "Marketing RH"
  },
  {
    id: 5,
    title: "Les tendances RH à surveiller en 2023",
    excerpt: "Comment les nouvelles technologies transforment les ressources humaines...",
    date: "3 février 2023",
    author: "Équipe GOLDEV",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "6 min",
    category: "Ressources Humaines"
  },
  {
    id: 6,
    title: "Optimiser le processus de recrutement",
    excerpt: "Les méthodes pour réduire les délais et améliorer la qualité des embauches...",
    date: "17 février 2023",
    author: "Équipe GOLDEV",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    readTime: "3 min",
    category: "Recrutement"
  }
];

// Categories for filtering
const categories = [
  "Tous",
  "Développement professionnel",
  "Recrutement",
  "Formation",
  "Marketing RH",
  "Ressources Humaines"
];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // Filter posts based on search query and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "Tous" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Notre Blog</h1>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              Découvrez nos derniers articles sur la formation, le recrutement et le développement professionnel
            </p>
            
            {/* Search bar */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 rounded-full bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white pr-10"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60" />
            </div>
          </div>
        </section>
        
        {/* Category Filter */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Aucun résultat trouvé</h2>
                <p className="text-gray-600 mb-6">Essayez de modifier votre recherche ou de sélectionner une autre catégorie.</p>
                <button 
                  onClick={() => {setSearchQuery(""); setSelectedCategory("Tous");}} 
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <Link 
                    key={post.id} 
                    to={`/blog/${post.id}`} 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs text-white bg-black px-3 py-1 rounded-full mb-3 inline-block">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2 text-black">{post.title}</h3>
                      <p className="text-gray-500 text-sm mb-3">{post.date} • {post.readTime} de lecture</p>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="text-black font-medium hover:underline">Lire la suite →</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-black text-white p-8 md:p-12 rounded-lg shadow-lg">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Abonnez-vous à notre newsletter</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Recevez nos derniers articles et actualités directement dans votre boîte de réception
                </p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="flex-grow px-4 py-3 rounded-md focus:outline-none text-black"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-colors whitespace-nowrap"
                  >
                    S'abonner
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
