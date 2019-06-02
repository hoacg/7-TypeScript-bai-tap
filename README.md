# [Bài tập] Ứng dụng search github project

## Mục tiêu

* Biết cách sử dụng Promse, Async/Await
* Biết cách thao tác với mảng
* Biết cách tạo các kiểu dữ liệu cơ bản trong TypeScript

## Mô tả

* Tạo ứng dụng search github project

## Hướng dẫn

**Bước 1**: Khởi tạo các kiểu dữ liệu tương ứng với dữ liệu mà Github API trả về. Bao gồm:
* API sẽ trả về một object có chứa property __items__
* __items__ sẽ là một mảng các object, mỗi object có chứa property __name__

**Bước 2**: Tạo một hàm async để fetch dữ liệu từ API về, sau đó hàm sẽ trả về một Promise của một mảng các object có property name kể trên.

**Bước 3**: Tạo một hàm nhận đầu vào là 1 string, và trả về 1 HTML LI Element, string đầu vào chính là textContent của object HTMLLIElement.

Lưu ý: bạn có thể dùng đoạn code sau để tạo thẻ LI:

```
document.createElement('li') as HTMLLIElement
```

**Bước 4**: Tạo phần HTML markup bao gồm:

```
<div class="app">

  <ul class="list"></ul>

</div>
```

**Bước 5**: sử dụng hàm document.querySelector để trỏ đến phần từ `<ul>` trong HTML (để có thể thêm các phần tử `<li>` vào đó)

**Bước 6**: triển khai các đoạn code xử lý các nhiệm vụ sau:

  1. lấy danh sách repo
  2. lặp qua mảng các `item` trả về
  3. gọi hàm document.createElement để tạo thẻ `<li>` sau đó truyền vào `name` của từng `item` ở mỗi vòng lặp
  4. gọi hàm appendChild của phần tử ở bước 5 để hiển thị các phần tử đó lên view.
