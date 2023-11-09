window.dangkiController = function ($scope, $http) {
  $scope.adduser = function () {
    $http
      .post("http://localhost:3000/user", {
        id: $scope.id,
        ten: $scope.ten,
        email: $scope.eamil,
        matkhau: $scope.matkhau,
        matkhau2: $scope.matkhau2,
      })
      .then(function (response) {
        if (response.status === 201) {
          alert("Đăng kí thành công");
        }
      });
  };
};

window.sanPhamController = function ($scope, $http) {
  $scope.listSanPham = [];
  $http.get("http://localhost:3000/sanpham").then(function (response) {
    $scope.listSanPham = response.data;
  });

  $scope.addSanPham = function () {
    $http
      .post("http://localhost:3000/sanpham", {
        id: $scope.id,
        img: $scope.img,
        ten: $scope.ten,
        gia: $scope.gia,
      })
      .then(function (response) {
        if (response.status === 201) {
          alert("Thêm thành công");
        }
      });
  };

  $scope.delete = function (id) {
    $http
      .delete("http://localhost:3000/sanpham/" + id)
      .then(function (response) {
        if (response.status === 200) {
          alert("Xóa thành công");
        }
      });
  };

  $scope.update = function (id) {
    $http
      .put("http://localhost:3000/sanpham/" + id, {
        id: $scope.id,
        img: $scope.img,
        ten: $scope.ten,
        gia: $scope.gia,
      })
      .then(function (response) {
        if (response.status === 200) {
          alert("Sửa thành công");
        }
      });
  };

  $scope.detail = function (id) {
    $http.get("http://localhost:3000/sanpham/" + id).then(function (response) {
      $scope.id = response.data.id;
      $scope.img = response.data.img;
      $scope.ten = response.data.ten;
      $scope.gia = response.data.gia;
    });
  };
};

window.detailController  = function($scope,$http,$routeParams){
    var id = $routeParams.id;
    $scope.sanpham = {};
    $http
    .get("http://localhost:3000/sanpham/" + id)
    .then(function (response) {
      $scope.sanpham = response.data;
    });
}

window.giohangController = function ($scope, $http) {
  $scope.listGioHang = [];
  $http.get("http://localhost:3000/giohang").then(function (response) {
    $scope.listGioHang = response.data;
  });

  $scope.addgiohang = function () {
    $http
      .post("http://localhost:3000/sanpham", {
        id: $scope.id,
        img: $scope.img,
        ten: $scope.ten,
        gia: $scope.gia,
      })
      .then(function (response) {
        if (response.status === 201) {
          alert("Thêm thành công");
        }
      });
  };
};

window.danhmucController = function ($scope, $http) {
    $scope.listDanhMuc = [];
    $http.get("http://localhost:3000/danhmuc").then(function (response) {
      $scope.listDanhMuc = response.data;
    });
  
    $scope.addDanhMuc = function () {
      $http
        .post("http://localhost:3000/danhmuc", {
          id: $scope.id,
          tendm: $scope.tendm,
        })
        .then(function (response) {
          if (response.status === 201) {
            alert("Thêm thành công");
          }
        });
    };
  
    $scope.delete = function (id) {
      $http
        .delete("http://localhost:3000/danhmuc/" + id)
        .then(function (response) {
          if (response.status === 200) {
            alert("Xóa thành công");
          }
        });
    };
  
    $scope.update = function (id) {
      $http
        .put("http://localhost:3000/danhmuc/" + id, {
          id: $scope.id,
          tendm: $scope.tendm,
        })
        .then(function (response) {
          if (response.status === 200) {
            alert("Sửa thành công");
          }
        });
    };
  
    $scope.detail = function (id) {
      $http.get("http://localhost:3000/danhmuc/" + id).then(function (response) {
        $scope.id = response.data.id;
        $scope.tendm = response.data.tendm;
      });
    };
  };