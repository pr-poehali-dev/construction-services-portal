import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container py-4 flex justify-between items-center mx-0 my-0 px-[1px]">
          <div className="flex items-center space-x-2">
            <Icon name="Home" className="text-[#FF6B35]" size={32} />
            <h1 className="text-2xl font-bold text-[#2C3E50] font-roboto">СтройМастер</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#FF6B35] transition-colors">Главная</a>
            <a href="#services" className="text-gray-700 hover:text-[#FF6B35] transition-colors">Услуги</a>
            <a href="#works" className="text-gray-700 hover:text-[#FF6B35] transition-colors">Наши работы</a>
            <a href="#prices" className="text-gray-700 hover:text-[#FF6B35] transition-colors">Цены</a>
            <a href="#reviews" className="text-gray-700 hover:text-[#FF6B35] transition-colors">Отзывы</a>
            <a href="#contact" className="text-gray-700 hover:text-[#FF6B35] transition-colors">Контакты</a>
          </nav>
          <Button className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-[#2C3E50] mb-6 leading-tight font-roboto">
                Ремонт под ключ
                <span className="text-[#FF6B35] block">любой сложности</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональные строительные услуги с гарантией качества. 
                Косметический и капитальный ремонт, сантехнические и электромонтажные работы.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm">Гарантия 1
 года</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">Срок от 21 дней</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">Опыт 8 лет</Badge>
              </div>
              <div className="flex gap-4 px-0">
                <Button size="lg" className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-8">
                  Получить расчет
                </Button>
                <Button size="lg" variant="outline" className="border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white">
                  Наши работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/e8357fb5-de29-43a6-bcf3-775d303bbfa5.jpg" 
                alt="Строительные услуги" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center">
                    <Icon name="Star" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-[#2C3E50]">4.9/5</div>
                    <div className="text-sm text-gray-600">Рейтинг клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4 font-roboto">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр строительных и ремонтных работ с гарантией качества
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#e55a2b] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Hammer" className="text-white" size={28} />
                </div>
                <CardTitle className="text-2xl text-[#2C3E50] mb-2 font-roboto">Ремонт под ключ</CardTitle>
                <CardDescription className="text-gray-600">
                  Комплексный ремонт любой сложности
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Косметический ремонт</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Капитальный ремонт</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Дизайнерский ремонт</span>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                    Узнать цену
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2C3E50] to-[#1a252f] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Droplets" className="text-white" size={28} />
                </div>
                <CardTitle className="text-2xl text-[#2C3E50] mb-2 font-roboto">Сантехнические работы</CardTitle>
                <CardDescription className="text-gray-600">
                  Профессиональная установка и замена
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Замена труб</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Установка сантехники</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Устранение протечек</span>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                    Узнать цену
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#e55a2b] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Zap" className="text-white" size={28} />
                </div>
                <CardTitle className="text-2xl text-[#2C3E50] mb-2 font-roboto">Электромонтажные работы</CardTitle>
                <CardDescription className="text-gray-600">
                  Безопасные электрические решения
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Замена проводки</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Установка розеток</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Монтаж освещения</span>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                    Узнать цену
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Наши работы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры выполненных проектов различной сложности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="/img/e8357fb5-de29-43a6-bcf3-775d303bbfa5.jpg" 
                alt="Современный ремонт квартиры" 
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg mb-1">Современный ремонт квартиры</h3>
                  <p className="text-sm opacity-90">Капитальный ремонт 3-комнатной квартиры с дизайнерским подходом</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="/img/ac0d7f64-798c-49ad-9b7f-9429fa8dfc50.jpg" 
                alt="Ремонт ванной комнаты" 
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg mb-1">Ремонт ванной комнаты</h3>
                  <p className="text-sm opacity-90">Полная реконструкция с современной сантехникой</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="/img/94bb0279-386f-47d2-a440-713642b84158.jpg" 
                alt="Электромонтажные работы" 
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg mb-1">Электромонтажные работы</h3>
                  <p className="text-sm opacity-90">Замена проводки и установка современного освещения</p>
                </div>
              </div>
            </div>
            
            {[4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 aspect-[4/3] flex items-center justify-center">
                  <Icon name="Image" className="text-gray-500" size={48} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">Проект {item}</h3>
                    <p className="text-sm opacity-90">Описание выполненных работ</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white">
              Смотреть все работы
            </Button>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Цены на услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-[#2C3E50] mb-2">Косметический ремонт</CardTitle>
                <div className="text-4xl font-bold text-[#FF6B35] mb-2">от 1500₽</div>
                <CardDescription className="text-gray-600">за м²</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Покраска стен</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Поклейка обоев</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Укладка ламината</span>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#FF6B35] text-white px-4 py-1">Популярно</Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-[#2C3E50] mb-2">Капитальный ремонт</CardTitle>
                <div className="text-4xl font-bold text-[#FF6B35] mb-2">от 3000₽</div>
                <CardDescription className="text-gray-600">за м²</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Полная отделка</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Замена коммуникаций</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Электрика и сантехника</span>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-[#2C3E50] mb-2">Дизайнерский ремонт</CardTitle>
                <div className="text-4xl font-bold text-[#FF6B35] mb-2">от 5000₽</div>
                <CardDescription className="text-gray-600">за м²</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Индивидуальный дизайн</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Премиум материалы</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={16} />
                  <span className="text-gray-700">Авторский надзор</span>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Анна Петрова", text: "Отличная работа! Ремонт сделали качественно и в срок. Рекомендую всем!", rating: 5 },
              { name: "Михаил Сидоров", text: "Профессиональный подход к делу. Все выполнено на высшем уровне.", rating: 5 },
              { name: "Елена Иванова", text: "Спасибо за качественный ремонт! Превзошли все ожидания.", rating: 5 }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-[#FF6B35] fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-[#2C3E50]">{review.name}</div>
                      <div className="text-sm text-gray-600">Клиент</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4">Связаться с нами</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Свяжитесь с нами удобным способом
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Оставьте заявку</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                  <Input placeholder="Введите ваше имя" className="border-gray-300 focus:border-[#FF6B35]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <Input placeholder="+7 (999) 999-99-99" className="border-gray-300 focus:border-[#FF6B35]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Описание проекта</label>
                  <Textarea placeholder="Опишите ваш проект..." rows={4} className="border-gray-300 focus:border-[#FF6B35]" />
                </div>
                <Button size="lg" className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                  Отправить заявку
                </Button>
              </form>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2C3E50]">+7 (999) 123-45-67</div>
                    <div className="text-gray-600">Звонки принимаем 24/7</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center">
                    <Icon name="Mail" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2C3E50]">info@stroymaster.ru</div>
                    <div className="text-gray-600">Ответим в течение часа</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2C3E50]">Москва, ул. Строителей, 15</div>
                    <div className="text-gray-600">Офис открыт с 9:00 до 18:00</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-[#2C3E50] mb-4">Гарантии качества</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="Shield" className="text-[#FF6B35]" size={16} />
                      <span className="text-gray-700">2 года гарантии на все работы</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Clock" className="text-[#FF6B35]" size={16} />
                      <span className="text-gray-700">Соблюдение сроков</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Award" className="text-[#FF6B35]" size={16} />
                      <span className="text-gray-700">Сертифицированные мастера</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Home" className="text-[#FF6B35]" size={32} />
                <h3 className="text-2xl font-bold">СтройМастер</h3>
              </div>
              <p className="text-gray-300">
                Профессиональные строительные услуги с гарантией качества
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Косметический ремонт</li>
                <li>Капитальный ремонт</li>
                <li>Сантехнические работы</li>
                <li>Электромонтажные работы</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+7 (999) 123-45-67</li>
                <li>info@stroymaster.ru</li>
                <li>Москва, ул. Строителей, 15</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Пн-Пт: 9:00 - 18:00</li>
                <li>Сб: 10:00 - 16:00</li>
                <li>Вс: выходной</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СтройМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index