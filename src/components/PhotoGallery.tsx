import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const photoNews = [
  {
    id: 1,
    title: "Фестиваль искусств в центре города",
    category: "Культура",
    image: "/placeholder.svg",
    photos: 24,
    time: "1 час назад",
  },
  {
    id: 2,
    title: "Строительство нового моста завершено",
    category: "Городские новости",
    image: "/placeholder.svg",
    photos: 18,
    time: "3 часа назад",
  },
  {
    id: 3,
    title: "Выставка современного искусства",
    category: "Искусство",
    image: "/placeholder.svg",
    photos: 32,
    time: "5 часов назад",
  },
  {
    id: 4,
    title: "Парад в честь Дня города",
    category: "События",
    image: "/placeholder.svg",
    photos: 45,
    time: "1 день назад",
  },
  {
    id: 5,
    title: "Новый парк открыт для посетителей",
    category: "Экология",
    image: "/placeholder.svg",
    photos: 27,
    time: "1 день назад",
  },
  {
    id: 6,
    title: "Чемпионат по робототехнике",
    category: "Технологии",
    image: "/placeholder.svg",
    photos: 38,
    time: "2 дня назад",
  },
];

export default function PhotoGallery() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">
              📸 Фотогалерея
            </h2>
            <p className="text-gray-600">
              События в ярких снимках наших фотокорреспондентов
            </p>
          </div>
          <Button
            variant="outline"
            className="border-news-orange text-news-orange hover:bg-news-orange hover:text-white"
          >
            <Icon name="Camera" size={16} className="mr-2" />
            Все фото
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photoNews.map((photo) => (
            <Card
              key={photo.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="bg-news-blue text-white px-2 py-1 rounded-full text-xs font-medium">
                    {photo.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs">
                  <Icon name="Images" size={12} className="mr-1" />
                  {photo.photos}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-white hover:bg-gray-100 text-black rounded-full"
                  >
                    <Icon name="ZoomIn" size={16} className="mr-2" />
                    Просмотр
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-heading font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                  {photo.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {photo.time}
                  </span>
                  <span className="flex items-center text-news-orange font-medium">
                    <Icon name="Heart" size={14} className="mr-1" />
                    {Math.floor(Math.random() * 100) + 20}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-news-orange to-news-magenta hover:from-news-magenta hover:to-news-purple text-white px-8"
          >
            <Icon name="Plus" size={16} className="mr-2" />
            Загрузить еще фото
          </Button>
        </div>
      </div>
    </section>
  );
}
