CREATE TABLE `factories` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(20) NOT NULL,
    `qty` int NOT NULL,
    `min` int NOT NULL,
    `max` int NOT NULL,
    `gentime` int NOT NULL,
    PRIMARY KEY (`id`)
)