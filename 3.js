function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    if(nilaiAwal > nilaiAkhir && dataArray.length < 5){
        console.log("Nilai akhir harus lebih besar dari nilai awal dan Jumlah angka dalam dataArray harus lebih dari 5")
    }else if (nilaiAwal > nilaiAkhir){
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }else if(dataArray.length < 5){
        console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    }else{
        let result = dataArray.filter(function(data){
            return (data >= nilaiAwal && data <= nilaiAkhir)
        })
        console.log(result.sort(function(a, b) {
            return a - b;
        }))
    }
}


SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])