import Header from "@/components/Header";
import VideoNewsSection from "@/components/VideoNewsSection";
import PhotoGallery from "@/components/PhotoGallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-news-orange via-news-magenta to-news-purple py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Будьте в курсе всех событий
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Самые свежие новости, видео и фотографии от наших корреспондентов со
            всего мира
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-news-orange hover:bg-gray-100 font-semibold px-8"
            >
              <Icon name="Zap" size={20} className="mr-2" />
              Горячие новости
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-news-orange font-semibold px-8"
            >
              <Icon name="Rss" size={20} className="mr-2" />
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      {/* Breaking News Ticker */}
      <section className="bg-news-orange py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <span className="bg-white text-news-orange px-3 py-1 rounded-full text-sm font-bold mr-4 flex-shrink-0">
              СРОЧНО
            </span>
            <div className="overflow-hidden flex-1">
              <div className="animate-marquee whitespace-nowrap text-white font-medium">
                🚀 Новый рекорд в космической индустрии • 📈 Экономика
                показывает рост на 5.2% • ⚽ Чемпионат мира начнется через 3 дня
                • 🎭 Фестиваль искусств собрал 100 тысяч посетителей
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoNewsSection />
      <PhotoGallery />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-news-orange to-news-magenta rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold">NewsFlash</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Ваш надежный источник актуальных новостей и событий.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Последние новости
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Видео
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Фотогалерея
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Архив
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:bg-news-orange hover:border-news-orange hover:text-white"
                >
                  <Icon name="Share2" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:bg-news-purple hover:border-news-purple hover:text-white"
                >
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:bg-news-blue hover:border-news-blue hover:text-white"
                >
                  <Icon name="Mail" size={16} />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Подписка</h4>
              <p className="text-sm text-gray-400 mb-3">
                Получайте самые важные новости на почту
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-news-orange text-sm"
                />
                <Button
                  size="sm"
                  className="bg-news-orange hover:bg-news-magenta rounded-l-none"
                >
                  <Icon name="Send" size={14} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 NewsFlash. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
