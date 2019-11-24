// 创建库
db = db.getSiblingDB('osc_db');
// 创建用户并设置权限
db.createUser(
    {
        user: "zwc",
        pwd: "123456",
        roles: [
            { role: "dbOwner", db: "osc_db"}
        ]
    }
);
// 创建集合
// db.createCollection("newCollection");
