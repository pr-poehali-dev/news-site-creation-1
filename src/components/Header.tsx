import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-news-orange to-news-magenta rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-news-orange to-news-purple bg-clip-text text-transparent">
                NewsFlash
              </h1>
            </div>

            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-news-orange font-medium transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-news-orange font-medium transition-colors"
              >
                Последние
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-news-orange font-medium transition-colors"
              >
                Видео
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-news-orange font-medium transition-colors"
              >
                Фото
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Поиск новостей..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-news-orange focus:border-transparent"
              />
            </div>

            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Icon name="Bell" size={16} className="mr-2" />
              Уведомления
            </Button>

            <Button size="sm" className="md:hidden">
              <Icon name="Menu" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
