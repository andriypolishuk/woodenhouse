let markNote = ['Cars', 'Houses', 'Interier', 'Headdamage', 'Fordoll', 'Forold',]


let NoteApp = {
    data() {
        return {
            hover: false,
            hoverNumber: -1,
            nameArr: ['Автомобілі', 'Домівки', "Інтер'єр", 'Головоломки', 'Для ляльок', 'Для дорослих',],
            addedItemId: null,
            notebookArr: [
                {
                    id: '0001',
                    name: 'Ляльковий будинок',
                    model: 'Лялькові будинки',
                    for: 'будь-кого',
                    material: 'ДВП ламіноване кольором',
                    price: '950',
                    img: 'Lyalkoviy_Budinochok.jpg',
                    link: 'ShopPage.html'
                },
                // {
                //     id: '0002',
                //     name: 'Класичний набір',
                //     model: 'Домівки',
                //     for: 'хлопців',
                //     material: 'фанера',
                //     price: '3712',
                //     img: '222.jpeg',
                //     link: 'ShopPage.html'

                // },
                // {
                //     id: '0003',
                //     name: 'Класичний набір',
                //     model: 'Автомобілі',
                //     for: 'будь-кого',
                //     material: 'дсп',
                //     price: '4105',
                //     img: '333.jpeg',
                //     link: 'ShopPage.html'
                // },
                // {
                //     id: '0004',
                //     name: 'Класичний набір',
                //     model: "Інтер'єр",
                //     for: 'дівчат',
                //     material: 'дсп',
                //     price: '4105',
                //     img: '222.jpeg',
                //     link: 'ShopPage.html'
                // },
                // {
                //     id: '0005',
                //     name: 'Тематична прикраса',
                //     model: 'Головоломки',
                //     for: 'хлопців',
                //     material: 'дсп',
                //     price: '4877',
                //     img: '333.jpeg',
                //     link: 'ShopPage.html'
                // },
                // {
                //     id: '0006',
                //     name: "Дерев'яна скульптура",
                //     model: 'Для ляльок',
                //     for: 'хлопців',
                //     material: 'акрил',
                //     price: '4848',
                //     img: '333.jpeg',
                //     link: 'ShopPage.html'
                // },
                // {
                //     id: '0007',
                //     name: "Дерев'яна скульптура",
                //     model: 'Для ляльок',
                //     for: 'хлопців',
                //     material: 'акрил',
                //     price: '1803',
                //     img: '111.jpeg',
                //     link: 'ShopPage.html'
                // },
                // {
                //     id: '0008',
                //     name: 'Настільна гра',
                //     model: 'Для ляльок',
                //     for: 'будь-кого',
                //     material: 'дсп',
                //     price: '2620',
                //     img: '222.jpeg',
                //     link: 'ShopPage.html'
                // },
                // {
                //     id: '0009',
                //     name: 'Настільна гра',
                //     model: 'Для ляльок',
                //     for: 'хлопців',
                //     material: 'акрил',
                //     price: '1118',
                //     img: '333.jpeg',
                //     link: 'ShopPage.html'
                // },
                // {
                //     id: '0010',
                //     name: 'Класичний набір',
                //     model: 'Для ляльок',
                //     for: 'дівчат',
                //     material: 'дсп',
                //     price: '3534',
                //     img: '111.jpeg',
                //     link: 'ShopPage.html'
                // },
                // {
                //     id: '0011',
                //     name: 'Настільна гра',
                //     model: 'Для ляльок',
                //     for: 'дівчат',
                //     material: 'фанера',
                //     price: '3722',
                //     img: '222.jpeg',
                //     link: 'ShopPage.html'
                // },
                // {
                //     id: '0012',
                //     name: "Дерев'яна скульптура",
                //     model: 'Для ляльок',
                //     for: 'дівчат',
                //     material: 'акрил',
                //     price: '216',
                //     img: '333.jpeg',
                //     link: 'ShopPage.html'
                // },
                // {
                //     id: '0013',
                //     name: 'Класичний набір',
                //     model: 'Для ляльок',
                //     for: 'дівчат',
                //     material: 'фанера',
                //     price: '4524',
                //     img: '111.jpeg',
                //     link: 'ShopPage.html'
                // },
                // {
                //     id: '0014',
                //     name: 'Ручна робота',
                //     model: 'Для ляльок',
                //     for: 'будь-кого',
                //     material: 'дсп',
                //     price: '449',
                //     img: '222.jpeg',
                //     link: 'ShopPage.html'
                // },
                // {
                //     id: '0015',
                //     name: 'Фігурка',
                //     model: 'Для дорослих',
                //     for: 'дівчат',
                //     material: 'фанера',
                //     price: '2783',
                //     img: '333.jpeg',
                //     link: 'ShopPage.html'
                // },
                // {
                //     id: '0016',
                //     name: "Дерев'яна прикраса",
                //     model: 'Для дорослих',
                //     for: 'дівчат',
                //     material: 'дсп',
                //     price: '1820',
                //     img: '111.jpeg',
                //     link: 'ShopPage.html'
                // },
                // {
                //     id: '0017',
                //     name: "Дерев'яна прикраса",
                //     model: 'Іграшки',
                //     for: 'дівчат',
                //     material: 'дсп',
                //     price: '1820',
                //     img: '111.jpeg',
                //     link: 'ShopPage.html'
                // },
                // {
                //     id: '0018',
                //     name: "Дерев'яна прикраса",
                //     model: 'Іграшки',
                //     for: 'дівчат',
                //     material: 'дсп',
                //     price: '1820',
                //     img: '111.jpeg',
                //     link: 'ShopPage.html'
                // }

            ],
            cart: [
            ],
            chooseName: '', // Початково вибраний фільтр (порожній для всіх карток)
            chooseIndex: 0,
            chooseNotebooks: [], // Масив для відображення
            search: "",
            suggestions: [],
            product: null,
        }
    },

    methods: {
        updateFilters() {
            // Оновлюємо nameArr, додаючи всі унікальні значення model з notebookArr
            const uniqueModels = [...new Set(this.notebookArr.map(item => item.model))];
            this.nameArr = uniqueModels;
        },
        addProduct(product) {
            // Додаємо новий товар до notebookArr
            this.notebookArr.push(product);

            // Оновлюємо фільтри після додавання нового товару
            this.updateFilters();
        },
        showNotebook(index) {
            this.chooseIndex = index; // Оновлюємо вибраний індекс
            this.chooseName = this.nameArr[index]; // Вибираємо ім'я категорії
            this.chooseNotebooks = this.notebookArr.filter(item => item.model === this.chooseName); // Фільтруємо картки
        },
        myFilter() {
            let searchString = this.search.trim().toLowerCase();

            if (!searchString) {
                this.chooseNotebooks = this.notebookArr;
                return;
            }

            this.chooseNotebooks = this.notebookArr.filter(item => {
                return item.name.toLowerCase().includes(searchString); // Замінили model на name
            });
        },
        updateSuggestions() {
            const query = this.search.trim().toLowerCase();
            if (!query) {
                this.suggestions = [];
                return;
            }
            this.suggestions = this.notebookArr
                .map(item => item.name) // Використовуємо name замість model
                .filter(name => name.toLowerCase().includes(query));

            // Якщо немає підказок, додаємо повідомлення про відсутність результатів
            if (this.suggestions.length === 0) {
                this.suggestions.push('Нічого не знайдено');
            }
        },
        highlightSuggestion(suggestion) {
            const query = this.search.trim().toLowerCase();
            return suggestion.replace(new RegExp(query, "gi"), match => `<span class="highlight">${match}</span>`);
        },
        selectSuggestion(suggestion) {
            this.search = suggestion;
            this.suggestions = [];
            this.myFilter(); // Викликаємо пошук після вибору підказки
        },
        onEnter() {
            this.myFilter(); // Запускаємо пошук
            this.suggestions = []; // Очищаємо підказки
        },
        clearFilters() {
            // Скидаємо фільтри до початкових значень
            this.filters.category = null;
            this.filters.priceRange = [0, 1000];
            // Якщо є інші фільтри, скидаємо їх аналогічно
        },
        renderCart() {
            console.log(this.cart); // Вивід поточного стану кошика
        },
        plusFunction(id) {
            const item = this.cart.find(cartItem => cartItem.id === id);
            if (item) {
                item.count++;
            }
            this.saveCart();
        },
        minusFunction(id) {
            const item = this.cart.find(cartItem => cartItem.id === id);
            if (item) {
                item.count--;
                if (item.count === 0) {
                    this.removeItem(id);
                }
            }
            this.saveCart();
        },
        removeItem(id) {
            this.cart = this.cart.filter(cartItem => cartItem.id !== id);
            console.log('Товар видалено. Оновлена корзина:', JSON.parse(JSON.stringify(this.cart)));
            this.saveCart();
            this.checkCartEmpty();
        },
        addToCart(id) {
            console.log('tovar dodano')
            const product = this.notebookArr.find(item => item.id === id);
            if (product) {
                const existingItem = this.cart.find(cartItem => cartItem.id === id);
                if (existingItem) {
                    existingItem.count++;
                } else {
                    this.cart.push({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        img: product.img,
                        link: product.link,
                        count: 1
                    });
                }
                this.saveCart();
            }
            const button = event.target;
            this.addedItemId = id; // Встановлюємо ID доданого товару
            button.textContent = "Товар додано";

            setTimeout(() => {
                this.addedItemId = null; // Скидаємо ID після 3 секунд
                button.textContent = "Додати до кошика";
            }, 2000);
        },
        saveCart() {
            console.log('Корзина збережена');
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        loadCart() {
            // Завантажити cart із localStorage, якщо він існує
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                this.cart = JSON.parse(savedCart);
            }
        },
        cartTotalCount() {
            return this.cart.reduce((total, item) => total + item.count, 0);
        },

        // Обчислюємо загальну суму товарів у кошику
        cartTotalPrice() {
            return this.cart.reduce((total, item) => total + item.price * item.count, 0);
        },
        checkCartEmpty() {
            // Перевірка, чи ми на сторінці form-crate.html
            if (this.cart.length === 0 && window.location.pathname.endsWith("form-crate.html")) {
                this.redirectToHome();
            }
        },

        redirectToHome() {
            if (this.cart.length === 0 && window.location.pathname.endsWith("form-crate.html")) {
                window.location.href = "index.html";
            }
        },

        applyPhoneMask() {
            var phoneInput = this.$refs.phone;
            if (phoneInput) {
                var im = new Inputmask("+380(99) 999 99 99");
                im.mask(phoneInput);
            }
        },
        filterByCategory(category) {
            if (category === 'all') {
                // Показати всі товари
                this.chooseNotebooks = this.notebookArr;
            } else {
                // Фільтрувати товари за категорією
                this.chooseNotebooks = this.notebookArr.filter(item => item.for === category);
            }
        }
    },
    mounted() {
        console.log('Vue ініціалізовано');
        this.loadCart();
        this.renderCart();
        this.chooseNotebooks = this.notebookArr;

        // Оновлюємо фільтри при завантаженні сторінки
        this.updateFilters();

        // Завжди ініціалізуємо маску для телефону
        this.applyPhoneMask();

        // Перевіряємо, чи ми на сторінці товару
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        console.log('Product ID from URL:', productId);  // Перевірка ID

        if (productId) {
            // Знаходимо товар за його ID
            this.product = this.notebookArr.find(item => item.id === productId);

            if (this.product) {
                console.log('Product found:', this.product);  // Перевірка знайденого товару
            } else {
                console.log('Product not found');
                // Якщо товар не знайдений, редирект на головну сторінку
                alert('Товар не знайдено');
                window.location.href = 'index.html';
            }
        }
    },

}

Vue.createApp(NoteApp).mount('#container-vue');

let btnAside = document.querySelector('.btn-aside');
let leftPanel = document.querySelector('.left-panel');
let contentDiv = document.querySelector('.content');

btnAside.onclick = function () {
    leftPanel.classList.toggle('hide-panel');
    btnAside.classList.toggle('btn-out');
    btnAside.classList.toggle('btn-hrest');
    // contentDiv.classList.toggle('move-content');
};

let btnAsideRight = document.querySelector('.right-panel .btn-aside-right');
let rightPanel = document.querySelector('.right-panel');

btnAsideRight.onclick = function () {
    rightPanel.classList.toggle('hide-panel-right');
    btnAsideRight.classList.toggle('btn-out-right');
    btnAsideRight.classList.toggle('btn-hrest-right');
};
let lastScrollY = 0;

const updateParallax = () => {
    document.querySelector('.layer1').style.transform = `translateY(${lastScrollY * 0.9}px)`;
    document.querySelector('.layer2').style.transform = `translateY(${lastScrollY * 0.7}px)`;
    document.querySelector('.layer3').style.transform = `translateY(${lastScrollY * 0.6}px)`;
    document.querySelector('.layer4').style.transform = `translateY(${lastScrollY * 0.4}px)`;
    document.querySelector('.layer5').style.transform = `translateY(${lastScrollY * 0.1}px)`;
    requestAnimationFrame(updateParallax);
};

document.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
});

requestAnimationFrame(updateParallax);



const TELEGRAM_BOT_TOKEN = '7895898111:AAGFqHj8fTk7Xt1L1zWipUhBIysnn61S0lE';
const TELEGRAM_CHAT_ID = '@ZamovlennyaWoodenHouse';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
const form = document.querySelector('.form-contacts');

async function sendEmailTelegram(event) {
    event.preventDefault();

    const TELEGRAM_BOT_TOKEN = '7895898111:AAGFqHj8fTk7Xt1L1zWipUhBIysnn61S0lE';
    const TELEGRAM_CHAT_ID = '@ZamovlennyaWoodenHouse';
    const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

    const form = document.querySelector('.form-contacts');
    const formBtn = document.querySelector('.form-btn');
    const formResult = document.querySelector('.form-result');
    formResult.textContent = '';

    const formData = new FormData(form);
    const { name, surname, fathername, newpost, number, city, email, dostavka, coment} = Object.fromEntries(formData.entries());

    // Отримуємо корзину з локального сховища
    const savedCart = localStorage.getItem('cart');
    const cart = savedCart ? JSON.parse(savedCart) : [];

    const cartData = cart.map(item => {
        return `ІД: ${item.id}, Назва: ${item.name}, Кількість: ${item.count}`;
    }).join('\n');

    const cartTotalCount = cart.reduce((total, item) => total + item.count, 0);
    const cartTotalPrice = cart.reduce((total, item) => total + item.price * item.count, 0);

    const cartSummary = `Додано товарів: ${cartTotalCount} на суму: ${cartTotalPrice} грн`;

    const text = `
Замовлення від ${surname} ${name} ${fathername}
Телефон: ${number}
Місто: ${city}
Служба доставки: ${dostavka}
Відділення нової пошти: ${newpost}
Емайл: ${email}

Дані корзини:
${cartData}

Загалом: ${cartSummary}

коментар до замовлення: ${coment}
`;

    try {
        formBtn.textContent = 'Loading...';
        const response = await fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
            }),
        });

        console.log('Response:', response);
        if (response.ok) {
            formResult.textContent = "Замовлення оформлене, ми зв'яжемося з вами найближчим часом";
            form.reset();
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error(error);
        formResult.textContent = "Виникла помилка, спробуйте пізніше";
        formResult.style.color = 'red';
    } finally {
        formBtn.textContent = 'Оформити';
    }
}
const commentField = document.querySelector('.comentar')

commentField.addEventListener('input', () => {
    const maxLength = 50;
    if (commentField.value.length > maxLength) {
        commentField.value = commentField.value.slice(0, maxLength);
        alert('Максимальна кількість символів: ' + maxLength);
    }
});
