export default class BookstoreService {

        data = [
            {
                id: 1,
                title: 'Secrets of Math',
                author: 'Marry Croft',
                price: 45,
                coverImage: 'https://m.media-amazon.com/images/I/617LMuOkVWL._AC_UY218_.jpg'
            },
            {
                id: 2,
                title: 'How Begin to Programming',
                author: 'Lary Soft',
                price: 23,
                coverImage: 'https://m.media-amazon.com/images/I/41T53nRtyoL._AC_UY218_.jpg'
            },
            {
                id: 3,
                title: 'Javascript Ninja',
                author: 'Branden Eick',
                price: 65,
                coverImage: 'https://m.media-amazon.com/images/I/91ahAhFS-LL._AC_UY218_.jpg'
            },
            {
                id: 4,
                title: 'Speak in Java',
                author: 'Will Smith',
                price: 55,
                coverImage: 'https://m.media-amazon.com/images/I/91xorHXzWbL._AC_UY218_.jpg' 
            },
            {
                id: 5,
                title: 'React Native',
                author: 'Tomash Zuckerberg',
                price: 48,
                coverImage: 'https://m.media-amazon.com/images/I/61iTwwX7vdL._AC_UL320_.jpg'
            }
            
        ];
        // real api-lerde melumat bu sekilde gelir, 0.7 saniye gecikme ile gelecek
        // burda melumatlar dummy olaraq arraydan geldiyi ucun Promise
        // if Math deyirki 4 defeden bir error goster
        getBooks() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
            
                        resolve(this.data)
                    
                }, 700);
            });
        }
    } 

    // asagidki kimi yazilis random olaraq error page-e gonderir, setTimeout-un icine yazanda
    // if(Math.random() > 0.75) {
    //     reject (new Error('Something bad happened'))
    // }else {
    //     resolve(this.data)
    // }
    
        




// REZERV-di istesen arrayi boyut
// ,{
            //     id: 3,
            //     title: 'Javascript Ninja',
            //     author: 'Branden Eick',
            //     price: 65,
            //     coverImage: 'https://m.media-amazon.com/images/I/91ahAhFS-LL._AC_UY218_.jpg'
            // },
            // {
            //     id: 4,
            //     title: 'Speak in Java',
            //     author: 'Will Smith',
            //     price: 55,
            //     coverImage: 'https://m.media-amazon.com/images/I/91xorHXzWbL._AC_UY218_.jpg' 
            // },
            // {
            //     id: 5,
            //     title: 'React Native',
            //     author: 'Tomash Zuckerberg',
            //     price: 48,
            //     coverImage: 'https://m.media-amazon.com/images/I/61iTwwX7vdL._AC_UL320_.jpg'
            // }