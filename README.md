# Yarn

- Thêm package: `yarn add [package]`

- Thêm package vào devDeps: `yarn add [package] -D`

- Xóa package: `yarn remove [package]`

# Nodemon

Nodemon dùng để tự chạy lại code mỗi khi save file

Nếu không cài global (-g), thì phải cấu hình cho nó một câu lệnh trong package.json của project

```json
"scripts": {
    // Cấu hình cho nodemon
    "start": "nodemon index.js",
},
```

Sau đó ra terminal gõ `npm run start` là ok
