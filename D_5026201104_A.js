$(document).ready(function () {
    $.validator.addMethod("letters", function (value, element) {
        return this.optional(element) || /^[a-z\-()\s]+$/i.test(value); 
    }, "Letters only please");
        $("#form").validate({
            rules: {
                nama: {
                    required: true,
                    letters: true,
                    minlength: 2
                },
                nrp: {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                    digits: true
                },
                jurusan: {
                    required: true
                },
                nomor: {
                    required: true,
                    minlength: 10,
                    digits: true
                },
            },
            messages: {
                nama: {
                    required: "Masukkan nama mahasiswa",
                    letters: "Nama mahasiswa harus berupa alphabet",
                    minlength: "Minimal 2 alphabet"
                },
                nrp: {
                    required: "Masukkan NRP",
                    minlength: "Minimal 10 angka",
                    maxlength: "Maksimal 10 angka",
                    digits: "NRP harus berupa angka"
                },
                jurusan: {
                    required: "Pilih jurusan"
                },
                nomor: {
                    required: "Masukkan nomor telepon",
                    minlength: "Minimal 10 angka",
                    digits: "Nomor telepon harus berupa angka"
                },
            }
        });
});