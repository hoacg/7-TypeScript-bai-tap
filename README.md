# [Bài tập] Ứng dụng search github project

## Mục tiêu

* Biết cách sử dụng Promse, Async/Await
* Biết cách thao tác với mảng
* Biết cách tạo các kiểu dữ liệu cơ bản trong TypeScript

## Mô tả

* Tạo ứng dụng search github project

## Hướng dẫn

Bước 1: Khởi tạo các kiểu dữ liệu tương ứng với dữ liệu mà Github API trả về. Bao gồm:
* API sẽ trả về một object có chứa property __items__
* __items__ sẽ là một mảng các object, mỗi object có chứa property __name__

Bước 2: Tạo một hàm async để fetch dữ liệu từ API về, sau đó hàm sẽ trả về một Promise của một mảng các object có property name kể trên.

Bước 3: Tạo một hàm nhận đầu vào là 1 string, và trả về 1 HTML LI Element, string đầu vào chính là textContent của object HTMLLIElement.

Lưu ý: bạn có thể dùng đoạn code sau để tạo thẻ LI:

```
document.createElement('li') as HTMLLIElement
```

Bước 4: Tạo phần HTML markup bao gồm:

```
<div class="app">

  <ul class="list"></ul>

</div>
```

Bước 5: query UL ở trong TS để có thể append các phần tử li vào đó.

Bước 6: cài đặt các đoạn code để xử lý các nhiệm vụ sau:

- step 1: fetch repo

- step 2: lặp qua mảng các item trả về

- step 3: call hàm để tạo LI element sau đó truyền vào name của từng item ở mỗi vòng lặp

- step 4: call hàm appendChild(item mà hàm createItem trả về) của phần tử ở bước 5 để hiển thị các phần tử đó lên view.
