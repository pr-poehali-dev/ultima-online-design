import { useState } from 'react'
import Icon from '@/components/ui/icon'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  
  const menuItems = [
    { id: 'home', name: 'Главная', icon: 'Home' },
    { id: 'news', name: 'Новости', icon: 'Newspaper' },
    { id: 'forum', name: 'Форум', icon: 'MessageSquare' },
    { id: 'gallery', name: 'Галерея', icon: 'Image' },
    { id: 'contacts', name: 'Контакты', icon: 'Mail' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Castle" size={32} className="text-primary animate-glow" />
              <h1 className="medieval-title text-primary">My World</h1>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-primary text-primary-foreground shadow-lg' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  <Icon name={item.icon as any} size={20} />
                  <span className="font-medieval">{item.name}</span>
                </button>
              ))}
            </nav>

            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: 'url(/img/b7ef5992-89b6-4337-9c97-57f7668e6348.jpg)' }}
          />
          
          <div className="relative z-10 text-center space-y-8 px-4">
            <div className="space-y-4">
              <h1 className="medieval-title text-6xl md:text-8xl text-primary animate-glow">
                My World
              </h1>
              <p className="medieval-subtitle text-2xl md:text-3xl text-accent">
                Ultima Online Server
              </p>
              <p className="fantasy-text text-xl text-muted-foreground max-w-2xl mx-auto">
                Добро пожаловать в мир магии и приключений. Присоединяйтесь к легендарному серверу 
                Ultima Online и окунитесь в атмосферу средневекового фэнтези.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medieval text-lg px-8 py-3">
                <Icon name="Gamepad2" size={24} className="mr-2" />
                Начать игру
              </Button>
              <Button variant="outline" size="lg" className="font-medieval text-lg px-8 py-3">
                <Icon name="Download" size={24} className="mr-2" />
                Скачать клиент
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Server Stats */}
      {activeSection === 'home' && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="medieval-subtitle text-center mb-12 text-accent">Статистика сервера</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-2">
                    <Icon name="Users" size={32} className="text-primary animate-float" />
                  </div>
                  <CardTitle className="text-2xl font-medieval text-primary">1,247</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Игроков онлайн</p>
                </CardContent>
              </Card>

              <Card className="text-center bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-2">
                    <Icon name="Crown" size={32} className="text-accent animate-float" />
                  </div>
                  <CardTitle className="text-2xl font-medieval text-accent">5.2</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Версия сервера</p>
                </CardContent>
              </Card>

              <Card className="text-center bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-2">
                    <Icon name="Zap" size={32} className="text-secondary animate-float" />
                  </div>
                  <CardTitle className="text-2xl font-medieval text-secondary">99.8%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Аптайм</p>
                </CardContent>
              </Card>

              <Card className="text-center bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-2">
                    <Icon name="Globe" size={32} className="text-primary animate-float" />
                  </div>
                  <CardTitle className="text-2xl font-medieval text-primary">24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Режим работы</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* News Section */}
      {activeSection === 'news' && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="medieval-subtitle text-center mb-12 text-accent">Новости сервера</h2>
            
            <div className="space-y-8">
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-medieval text-primary">Обновление 5.2: Новые земли</CardTitle>
                    <span className="text-sm text-muted-foreground">15 сентября 2025</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="fantasy-text text-muted-foreground">
                    Открылись новые территории для исследования! Отправляйтесь в путешествие 
                    по мистическим лесам и древним подземельям.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-medieval text-primary">Турнир магов</CardTitle>
                    <span className="text-sm text-muted-foreground">10 сентября 2025</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="fantasy-text text-muted-foreground">
                    Приглашаем всех магов принять участие в великом турнире! 
                    Призы включают редкие артефакты и золото.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Forum Section */}
      {activeSection === 'forum' && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="medieval-subtitle text-center mb-12 text-accent">Форум сообщества</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-medieval text-primary flex items-center">
                    <Icon name="MessageSquare" size={20} className="mr-2" />
                    Общие вопросы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Обсуждение игровых механик и вопросов новичков</p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1,234 сообщений</span>
                    <span>Сегодня в 14:30</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-medieval text-primary flex items-center">
                    <Icon name="Sword" size={20} className="mr-2" />
                    PvP арена
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Обсуждение боевых стратегий и турниров</p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>856 сообщений</span>
                    <span>Вчера в 22:15</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-medieval text-primary flex items-center">
                    <Icon name="Briefcase" size={20} className="mr-2" />
                    Торговля
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Покупка, продажа и обмен предметов</p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>2,156 сообщений</span>
                    <span>2 часа назад</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {activeSection === 'gallery' && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="medieval-subtitle text-center mb-12 text-accent">Галерея</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="bg-card/80 backdrop-blur-sm overflow-hidden group">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon name="Image" size={48} className="text-primary/50" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medieval text-primary mb-2">Скриншот {i}</h3>
                    <p className="text-sm text-muted-foreground">Захватывающий момент из игры</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contacts Section */}
      {activeSection === 'contacts' && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="medieval-subtitle text-center mb-12 text-accent">Контакты</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-medieval text-primary">Связь с администрацией</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span>admin@myworld-uo.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MessageCircle" size={20} className="text-primary" />
                    <span>Telegram: @myworld_support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Globe" size={20} className="text-primary" />
                    <span>Discord: MyWorld Community</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-medieval text-primary">Техническая поддержка</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <span>Время работы: 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Headphones" size={20} className="text-primary" />
                    <span>Средний ответ: 15 минут</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Shield" size={20} className="text-primary" />
                    <span>Защита аккаунта</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Castle" size={24} className="text-primary" />
            <span className="medieval-subtitle text-primary">My World</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 My World Ultima Online Server. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App