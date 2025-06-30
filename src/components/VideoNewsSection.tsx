import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const videoNews = [
  {
    id: 1,
    title: "Прорыв в космических технологиях: новая миссия на Марс",
    category: "Наука",
    duration: "3:42",
    thumbnail: "/placeholder.svg",
    views: "234К",
    time: "2 часа назад",
  },
  {
    id: 2,
    title: "Экономические новости: рост технологических компаний",
    category: "Экономика",
    duration: "2:15",
    thumbnail: "/placeholder.svg",
    views: "156К",
    time: "4 часа назад",
  },
  {
    id: 3,
    title: "Спортивные достижения: чемпионат мира по футболу",
    category: "Спорт",
    duration: "1:58",
    thumbnail: "/placeholder.svg",
    views: "445К",
    time: "6 часов назад",
  },
];

export default function VideoNewsSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">
              📺 Видео Новости
            </h2>
            <p className="text-gray-600">
              Самые актуальные события в видеоформате
            </p>
          </div>
          <Button className="bg-news-purple hover:bg-news-magenta">
            <Icon name="Play" size={16} className="mr-2" />
            Все видео
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  alt="Главное видео"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-black rounded-full w-16 h-16 p-0"
                  >
                    <Icon name="Play" size={24} />
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-news-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    LIVE
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                    5:23
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-news-orange font-medium text-sm">
                    ГЛАВНАЯ НОВОСТЬ
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 leading-tight">
                  Историческое событие: первый полет нового космического корабля
                </h3>
                <div className="flex items-center text-sm text-gray-600 space-x-4">
                  <span className="flex items-center">
                    <Icon name="Eye" size={16} className="mr-1" />
                    1.2M просмотров
                  </span>
                  <span>30 минут назад</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {videoNews.map((video) => (
              <Card
                key={video.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              >
                <div className="flex">
                  <div className="relative w-32 h-20 flex-shrink-0">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-60 transition-all duration-300">
                      <Icon name="Play" size={16} className="text-white" />
                    </div>
                    <span className="absolute bottom-1 right-1 bg-black bg-opacity-60 text-white px-1 rounded text-xs">
                      {video.duration}
                    </span>
                  </div>
                  <CardContent className="flex-1 p-3">
                    <div className="mb-1">
                      <span className="text-news-blue font-medium text-xs">
                        {video.category}
                      </span>
                    </div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2 leading-tight">
                      {video.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-600 space-x-2">
                      <span>{video.views}</span>
                      <span>•</span>
                      <span>{video.time}</span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
