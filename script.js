/**AŞğıdaki object literal yapısını kullanarak en az 5 araç bilgini tutunuz.
 
Araç Bilgileri :
 id : bmw116_1234
 model : 116d
 years :2015
color : white
service records : 
           id : bmw116d_1234_1 tarih : 30.01.2016 km : 13000  toplam ücret : 900
           servis detayı : 
           id : 1 işlem : yağ değişimi ücret : 300
           id : 2 işlem : filtre değişimi :300
           id : 3 işlem : fren hidroliği : 300
           
         
        id : bmw116d_1234_2 tarih : 10.01.2017 km : 28000 toplam ücret :1800
        id : 1 işlem : yağ değişimi ücret : 350
        id : 2 işlem : filtre deeğişimi : 350
        id : 3 işlem : fren hidroliği : 300
        id : 4 işlem : balata : 800

 */

let aracBilgileri = {
    id: 'bmw116_1234',
    model: '116d',
    years: 2015,
    color: 'white',
    serviceRecords: [{
            id: 'bmw116d_1234_1',
            tarih: '30.01.2016',
            km: 13000,
            toplamUcret: 900,
            servisDetayi: [{
                    id: 'islem1',
                    yagDeğisimUcreti: 300,
                },
                {
                    id: 'islem2',
                    filtreDeğisimUcreti: 300,
                },
                {
                    id: 'isle3',
                    frenHidroligiUcreti: 300,
                },
            ]
        },

        {
            id: 'bmw116d_1234_2',
            tarih: '10.01.2017',
            km: 28000,
            toplamUcret: 1800,
            servisDetayi: [{
                    id: 'islem1',
                    yagDeğisimUcreti: 350,
                },
                {
                    id: 'islem2',
                    filtreDeğisimUcreti: 350,
                },
                {
                    id: 'isle3',
                    frenHidroligiUcreti: 800,
                },
            ]
        }
    ]
}

console.log(aracBilgileri);