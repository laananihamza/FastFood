-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 02, 2023 at 10:58 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `burgerkech`
--

-- --------------------------------------------------------

--
-- Table structure for table `burger`
--

CREATE TABLE `burger` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `urlPhoto` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ingredients` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `category_code` bigint(20) UNSIGNED NOT NULL,
  `stock` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `burger`
--

INSERT INTO `burger` (`id`, `name`, `urlPhoto`, `ingredients`, `size`, `price`, `category_code`, `stock`, `created_at`, `updated_at`, `description`) VALUES
(1, 'Beef Burger', '../images/beefBurger.jpeg', 'test, test', 'S', 12, 1, 51, NULL, NULL, 'mnnmbnbbbgfcc');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `images` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category_name`, `created_at`, `updated_at`, `images`) VALUES
(1, 'Burger', NULL, NULL, '../images/beefBurger.jpeg'),
(2, 'Pizza', NULL, NULL, './images/veggiePizza.png'),
(3, 'Pasta', NULL, NULL, './images/salade9.png'),
(4, 'Cold Drink', NULL, NULL, './images/shake5.png'),
(5, 'Hot Drink', NULL, NULL, './images/category-drink.png'),
(6, 'Tacos', NULL, NULL, './images/tacospoulet.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `drinks`
--

CREATE TABLE `drinks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `urlPhoto` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `stock` bigint(20) NOT NULL,
  `category_code` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ingredients` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_09_17_152157_create_category_table', 1),
(6, '2022_09_17_152330_create_products_table', 1),
(7, '2022_09_28_093822_create_pizza_table', 1),
(8, '2022_09_28_101053_create_burger_table', 1),
(9, '2022_09_28_101509_create_pasta_table', 1),
(10, '2022_09_28_101634_create_drinks_table', 1),
(11, '2022_09_28_163847_create_tacos_table', 1),
(12, '2022_09_28_215309_add_description_to_pizza_table', 1),
(13, '2022_09_28_215354_add_description_to_burger_table', 1),
(14, '2022_09_28_215421_add_description_to_pasta_table', 1),
(15, '2022_09_28_215440_add_description_to_tacos_table', 1),
(16, '2022_09_28_224757_create_popular_table', 1),
(17, '2022_10_12_211946_add_ingredients_to_pasta_table', 1),
(18, '2022_10_12_212022_add_ingredients_to_tacos_table', 1),
(19, '2022_10_12_212529_add_description_to_drinks_table', 1),
(20, '2022_10_12_212548_add_ingredients_to_drinks_table', 1),
(21, '2022_10_12_212656_add_ingredients_to_tacos_table', 1),
(22, '2023_02_08_112358_add_images_to_category', 2),
(23, '2023_02_22_182708_add_ingredients_to_products_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pasta`
--

CREATE TABLE `pasta` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `urlPhoto` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `stock` bigint(20) NOT NULL,
  `category_code` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ingredients` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pizza`
--

CREATE TABLE `pizza` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `urlPhoto` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ingredients` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `category_code` bigint(20) UNSIGNED NOT NULL,
  `stock` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pizza`
--

INSERT INTO `pizza` (`id`, `name`, `urlPhoto`, `ingredients`, `size`, `price`, `category_code`, `stock`, `created_at`, `updated_at`, `description`) VALUES
(4, 'Cheese Pizza', 'images/cheesePizza.gif', 'parmesan cheese, salt & pepper, mozzarella cheese', 'S', 13, 2, 1000, NULL, NULL, 'It should be no shocker that a classic is the statistical favorite. Cheese pizza is one of the most popular choices. It will always be a simple, unadorned masterpiece on its own.'),
(5, 'Cheese Pizza', 'images/cheesePizza.gif', 'parmesan cheese, salt & pepper, mozzarella cheese', 'M', 20, 2, 1000, NULL, NULL, 'It should be no shocker that a classic is the statistical favorite. Cheese pizza is one of the most popular choices. It will always be a simple, unadorned masterpiece on its own.'),
(6, 'Cheese Pizza', 'images/cheesePizza.gif', 'parmesan cheese, salt & pepper, mozzarella cheese', 'L', 26, 2, 1000, NULL, NULL, 'It should be no shocker that a classic is the statistical favorite. Cheese pizza is one of the most popular choices. It will always be a simple, unadorned masterpiece on its own.'),
(7, 'Veggie Pizza', 'images/veggiePizza.png', 'salt & pepper, mushrooms, eggplant, onions ', 'S', 15, 2, 900, NULL, NULL, 'veggies are the perfect topping. And you’re only limited by your imagination. Everything from peppers and mushrooms, to eggplant and onions make for an exciting and tasty veggie pizza.'),
(8, 'Veggie Pizza', 'images/veggiePizza.png', 'salt & pepper, mushrooms, eggplant, onions ', 'M', 23, 2, 900, NULL, NULL, 'veggies are the perfect topping. And you’re only limited by your imagination. Everything from peppers and mushrooms, to eggplant and onions make for an exciting and tasty veggie pizza.'),
(9, 'Veggie Pizza', 'images/veggiePizza.png', 'salt & pepper, mushrooms, eggplant, onions ', 'L', 28, 2, 900, NULL, NULL, 'veggies are the perfect topping. And you’re only limited by your imagination. Everything from peppers and mushrooms, to eggplant and onions make for an exciting and tasty veggie pizza.'),
(10, 'Pepperoni Pizza', 'images/pepperoniPizza.jpg', 'Pepperoni, salt & pepper, mushrooms, mozzarella cheese', 'S', 15, 2, 900, NULL, NULL, 'There’s a reason this is one of the most popular types of pizza. Who doesn’t love biting into a crispy, salty round of pepperoni?'),
(11, 'Pepperoni Pizza', 'images/pepperoniPizza.jpg', 'Pepperoni, salt & pepper, mushrooms, mozzarella cheese', 'M', 23, 2, 900, NULL, NULL, 'There’s a reason this is one of the most popular types of pizza. Who doesn’t love biting into a crispy, salty round of pepperoni?'),
(12, 'Pepperoni Pizza', 'images/pepperoniPizza.jpg', 'Pepperoni, salt & pepper, mushrooms, mozzarella cheese', 'L', 28, 2, 900, NULL, NULL, 'There’s a reason this is one of the most popular types of pizza. Who doesn’t love biting into a crispy, salty round of pepperoni?'),
(13, 'Meat Pizza', 'images/meatPizza.jpg', 'Bacon, Mozzarella, pepperoni, red pepper flakes', 'S', 18, 2, 900, NULL, NULL, 'If pepperoni just isn’t enough, and you’re looking for a pie with a bit more heft, a meat pizza is a perfect and popular choice. Pile on ground beef and sausage for a hearty meal.'),
(14, 'Meat Pizza', 'images/meatPizza.jpg', 'Bacon, Mozzarella, pepperoni, red pepper flakes', 'L', 30, 2, 900, NULL, NULL, 'If pepperoni just isn’t enough, and you’re looking for a pie with a bit more heft, a meat pizza is a perfect and popular choice. Pile on ground beef and sausage for a hearty meal.'),
(15, 'Meat Pizza', 'images/meatPizza.jpg', 'Bacon, Mozzarella, pepperoni, red pepper flakes', 'M', 25, 2, 900, NULL, NULL, 'If pepperoni just isn’t enough, and you’re looking for a pie with a bit more heft, a meat pizza is a perfect and popular choice. Pile on ground beef and sausage for a hearty meal.'),
(16, 'Margherita Pizza', 'images/margheritaPizza.jpg', 'slice tomatoes, mozzarella, parmesan, basil', 'S', 10, 2, 1000, NULL, NULL, 'Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes. There’s a reason it’s an Italian staple and one of the most popular types of pizza in the country.'),
(17, 'Margherita Pizza', 'images/margheritaPizza.jpg', 'slice tomatoes, mozzarella, parmesan, basil', 'M', 15, 2, 1000, NULL, NULL, 'Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes. There’s a reason it’s an Italian staple and one of the most popular types of pizza in the country.'),
(18, 'Margherita Pizza', 'images/margheritaPizza.jpg', 'slice tomatoes, mozzarella, parmesan, basil', 'L', 20, 2, 1000, NULL, NULL, 'Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes. There’s a reason it’s an Italian staple and one of the most popular types of pizza in the country.'),
(19, 'Chicken Pizza', 'images/chickenPizza.jpg', 'BBQ Chicken, gouda cheese, mozzarella cheese, banana peppers, BBQ Sauce', 'S', 20, 2, 1000, NULL, NULL, 'If you love BBQ chicken and you love pizza, why not put them together? This has long been a cult favorite of sports fans and college kids. The chicken slathered over the top of a pie gives it a tangy, sweet flavor that can’t be beaten.'),
(20, 'Chicken Pizza', 'images/chickenPizza.jpg', 'BBQ Chicken, gouda cheese, mozzarella cheese, banana peppers, BBQ Sauce', 'M', 30, 2, 1000, NULL, NULL, 'If you love BBQ chicken and you love pizza, why not put them together? This has long been a cult favorite of sports fans and college kids. The chicken slathered over the top of a pie gives it a tangy, sweet flavor that can’t be beaten.'),
(21, 'Chicken Pizza', 'images/chickenPizza.jpg', 'BBQ Chicken, gouda cheese, mozzarella cheese, banana peppers, BBQ Sauce', 'L', 40, 2, 1000, NULL, NULL, 'If you love BBQ chicken and you love pizza, why not put them together? This has long been a cult favorite of sports fans and college kids. The chicken slathered over the top of a pie gives it a tangy, sweet flavor that can’t be beaten.'),
(22, 'Buffalo Pizza', 'images/buffaloPizza.jpg', 'chicken, blue cheese, mozzarella, butter, egg wash', 'S', 15, 2, 1000, NULL, NULL, 'Who says your pizza has to be strictly tomato-sauce based? Branch out with some buffalo sauce on your pie. All its spicy, salty, buttery goodness is a natural pairing for pizza.'),
(23, 'Buffalo Pizza', 'images/buffaloPizza.jpg', 'chicken, blue cheese, mozzarella, butter, egg wash', 'M', 23, 2, 1000, NULL, NULL, 'Who says your pizza has to be strictly tomato-sauce based? Branch out with some buffalo sauce on your pie. All its spicy, salty, buttery goodness is a natural pairing for pizza.'),
(24, 'Buffalo Pizza', 'images/buffaloPizza.jpg', 'chicken, blue cheese, mozzarella, butter, egg wash', 'L', 30, 2, 1000, NULL, NULL, 'Who says your pizza has to be strictly tomato-sauce based? Branch out with some buffalo sauce on your pie. All its spicy, salty, buttery goodness is a natural pairing for pizza.'),
(25, 'Supreme Pizza', 'images/supreme Pizza.jpg', 'olives, peppers, onions, sausage, pepperoni', 'S', 20, 2, 1000, NULL, NULL, ' The “supreme” refers to the litany of toppings that come scattered on these pies, from sausage to vegetables to pepperoni. And it’s the combination of the flavors that really makes it sing.'),
(26, 'Supreme Pizza', 'images/supreme Pizza.jpg', 'olives, peppers, onions, sausage, pepperoni', 'M', 25, 2, 1000, NULL, NULL, ' The “supreme” refers to the litany of toppings that come scattered on these pies, from sausage to vegetables to pepperoni. And it’s the combination of the flavors that really makes it sing.'),
(27, 'Supreme Pizza', 'images/supreme Pizza.jpg', 'olives, peppers, onions, sausage, pepperoni', 'L', 30, 2, 1000, NULL, NULL, ' The “supreme” refers to the litany of toppings that come scattered on these pies, from sausage to vegetables to pepperoni. And it’s the combination of the flavors that really makes it sing.');

-- --------------------------------------------------------

--
-- Table structure for table `popular`
--

CREATE TABLE `popular` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `description` int(11) NOT NULL,
  `urlPhoto` int(11) NOT NULL,
  `category_code` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `urlPhoto` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stock` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ingredients` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_code` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `urlPhoto`, `stock`, `price`, `size`, `ingredients`, `description`, `category_code`, `created_at`, `updated_at`) VALUES
(4, 'Cheese Pizza', 'images/cheesePizza.gif', '1000', '13', 'S', 'parmesan cheese, salt & pepper, mozzarella cheese', 'It should be no shocker that a classic is the statistical favorite. Cheese pizza is one of the most popular choices. It will always be a simple, unadorned masterpiece on its own.', 2, NULL, NULL),
(5, 'Cheese Pizza', 'images/cheesePizza.gif', '1000', '20', 'M', 'parmesan cheese, salt & pepper, mozzarella cheese', 'It should be no shocker that a classic is the statistical favorite. Cheese pizza is one of the most popular choices. It will always be a simple, unadorned masterpiece on its own.', 2, NULL, NULL),
(6, 'Cheese Pizza', 'images/cheesePizza.gif', '1000', '26', 'L', 'parmesan cheese, salt & pepper, mozzarella cheese', 'It should be no shocker that a classic is the statistical favorite. Cheese pizza is one of the most popular choices. It will always be a simple, unadorned masterpiece on its own.', 2, NULL, NULL),
(7, 'Veggie Pizza', 'images/veggiePizza.png', '900', '15', 'S', 'salt & pepper, mushrooms, eggplant, onions ', 'veggies are the perfect topping. And you’re only limited by your imagination. Everything from peppers and mushrooms, to eggplant and onions make for an exciting and tasty veggie pizza.', 2, NULL, NULL),
(8, 'Veggie Pizza', 'images/veggiePizza.png', '900', '23', 'M', 'salt & pepper, mushrooms, eggplant, onions ', 'veggies are the perfect topping. And you’re only limited by your imagination. Everything from peppers and mushrooms, to eggplant and onions make for an exciting and tasty veggie pizza.', 2, NULL, NULL),
(9, 'Veggie Pizza', 'images/veggiePizza.png', '900', '28', 'L', 'salt & pepper, mushrooms, eggplant, onions ', 'veggies are the perfect topping. And you’re only limited by your imagination. Everything from peppers and mushrooms, to eggplant and onions make for an exciting and tasty veggie pizza.', 2, NULL, NULL),
(10, 'Pepperoni Pizza', 'images/pepperoniPizza.jpg', '900', '15', 'S', 'Pepperoni, salt & pepper, mushrooms, mozzarella cheese', 'There’s a reason this is one of the most popular types of pizza. Who doesn’t love biting into a crispy, salty round of pepperoni?', 2, NULL, NULL),
(11, 'Pepperoni Pizza', 'images/pepperoniPizza.jpg', '900', '23', 'M', 'Pepperoni, salt & pepper, mushrooms, mozzarella cheese', 'There’s a reason this is one of the most popular types of pizza. Who doesn’t love biting into a crispy, salty round of pepperoni?', 2, NULL, NULL),
(12, 'Pepperoni Pizza', 'images/pepperoniPizza.jpg', '900', '28', 'L', 'Pepperoni, salt & pepper, mushrooms, mozzarella cheese', 'There’s a reason this is one of the most popular types of pizza. Who doesn’t love biting into a crispy, salty round of pepperoni?', 2, NULL, NULL),
(13, 'Meat Pizza', 'images/meatPizza.jpg', '900', '18', 'S', 'Bacon, Mozzarella, pepperoni, red pepper flakes', 'If pepperoni just isn’t enough, and you’re looking for a pie with a bit more heft, a meat pizza is a perfect and popular choice. Pile on ground beef and sausage for a hearty meal.', 2, NULL, NULL),
(14, 'Meat Pizza', 'images/meatPizza.jpg', '900', '30', 'L', 'Bacon, Mozzarella, pepperoni, red pepper flakes', 'If pepperoni just isn’t enough, and you’re looking for a pie with a bit more heft, a meat pizza is a perfect and popular choice. Pile on ground beef and sausage for a hearty meal.', 2, NULL, NULL),
(15, 'Meat Pizza', 'images/meatPizza.jpg', '900', '25', 'M', 'Bacon, Mozzarella, pepperoni, red pepper flakes', 'If pepperoni just isn’t enough, and you’re looking for a pie with a bit more heft, a meat pizza is a perfect and popular choice. Pile on ground beef and sausage for a hearty meal.', 2, NULL, NULL),
(16, 'Margherita Pizza', 'images/margheritaPizza.jpg', '1000', '10', 'S', 'slice tomatoes, mozzarella, parmesan, basil', 'Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes. There’s a reason it’s an Italian staple and one of the most popular types of pizza in the country.', 2, NULL, NULL),
(17, 'Margherita Pizza', 'images/margheritaPizza.jpg', '1000', '15', 'M', 'slice tomatoes, mozzarella, parmesan, basil', 'Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes. There’s a reason it’s an Italian staple and one of the most popular types of pizza in the country.', 2, NULL, NULL),
(18, 'Margherita Pizza', 'images/margheritaPizza.jpg', '1000', '20', 'L', 'slice tomatoes, mozzarella, parmesan, basil', 'Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes. There’s a reason it’s an Italian staple and one of the most popular types of pizza in the country.', 2, NULL, NULL),
(19, 'Chicken Pizza', 'images/chickenPizza.jpg', '1000', '20', 'S', 'BBQ Chicken, gouda cheese, mozzarella cheese, banana peppers, BBQ Sauce', 'If you love BBQ chicken and you love pizza, why not put them together? This has long been a cult favorite of sports fans and college kids. The chicken slathered over the top of a pie gives it a tangy, sweet flavor that can’t be beaten.', 2, NULL, NULL),
(20, 'Chicken Pizza', 'images/chickenPizza.jpg', '1000', '30', 'M', 'BBQ Chicken, gouda cheese, mozzarella cheese, banana peppers, BBQ Sauce', 'If you love BBQ chicken and you love pizza, why not put them together? This has long been a cult favorite of sports fans and college kids. The chicken slathered over the top of a pie gives it a tangy, sweet flavor that can’t be beaten.', 2, NULL, NULL),
(21, 'Chicken Pizza', 'images/chickenPizza.jpg', '1000', '40', 'L', 'BBQ Chicken, gouda cheese, mozzarella cheese, banana peppers, BBQ Sauce', 'If you love BBQ chicken and you love pizza, why not put them together? This has long been a cult favorite of sports fans and college kids. The chicken slathered over the top of a pie gives it a tangy, sweet flavor that can’t be beaten.', 2, NULL, NULL),
(22, 'Buffalo Pizza', 'images/buffaloPizza.jpg', '1000', '15', 'S', 'chicken, blue cheese, mozzarella, butter, egg wash', 'Who says your pizza has to be strictly tomato-sauce based? Branch out with some buffalo sauce on your pie. All its spicy, salty, buttery goodness is a natural pairing for pizza.', 2, NULL, NULL),
(23, 'Buffalo Pizza', 'images/buffaloPizza.jpg', '1000', '23', 'M', 'chicken, blue cheese, mozzarella, butter, egg wash', 'Who says your pizza has to be strictly tomato-sauce based? Branch out with some buffalo sauce on your pie. All its spicy, salty, buttery goodness is a natural pairing for pizza.', 2, NULL, NULL),
(24, 'Buffalo Pizza', 'images/buffaloPizza.jpg', '1000', '30', 'L', 'chicken, blue cheese, mozzarella, butter, egg wash', 'Who says your pizza has to be strictly tomato-sauce based? Branch out with some buffalo sauce on your pie. All its spicy, salty, buttery goodness is a natural pairing for pizza.', 2, NULL, NULL),
(25, 'Supreme Pizza', 'images/supreme Pizza.jpg', '1000', '20', 'S', 'olives, peppers, onions, sausage, pepperoni', ' The “supreme” refers to the litany of toppings that come scattered on these pies, from sausage to vegetables to pepperoni. And it’s the combination of the flavors that really makes it sing.', 2, NULL, NULL),
(26, 'Supreme Pizza', 'images/supreme Pizza.jpg', '1000', '25', 'M', 'olives, peppers, onions, sausage, pepperoni', ' The “supreme” refers to the litany of toppings that come scattered on these pies, from sausage to vegetables to pepperoni. And it’s the combination of the flavors that really makes it sing.', 2, NULL, NULL),
(27, 'Supreme Pizza', 'images/supreme Pizza.jpg', '1000', '30', 'L', 'olives, peppers, onions, sausage, pepperoni', ' The “supreme” refers to the litany of toppings that come scattered on these pies, from sausage to vegetables to pepperoni. And it’s the combination of the flavors that really makes it sing.', 2, NULL, NULL),
(28, 'Beef Burger', '../images/beefBurger.jpeg', '100', '25', 'S', 'Pan, chesse, Beef\'s meat, Tomato, Onion...', 'The beef Burger is the most famous dishes in our Restaurant, but to order one you have to be brave that the small one is fit the laaaarge preson, so be carefull, haha', 1, '2023-02-24 16:32:39', '2023-02-24 16:32:39');

-- --------------------------------------------------------

--
-- Table structure for table `tacos`
--

CREATE TABLE `tacos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `urlPhoto` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `stock` bigint(20) NOT NULL,
  `category_code` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ingredients` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Folan Khalid', 'xyz@user.com', NULL, '$2y$10$z04UCWjOSjv7NSA6jgQ/BOZ0l6GeeFzv.4iiU5MYrCOFat.HuLB7.', 'z1XBi7dJ0daEuC7otbPSgk7VQUbxjw7W6dqLhve9HYPwRU0MtH3nYOYNArpb', '2023-02-15 11:00:00', '2023-02-15 11:00:00'),
(2, 'Hamza Admin', 'hl@admin.com', NULL, '$2y$10$FPmoaqsBO3HEnMSJzSjCNeB3WzimMGdZx0QjPBmMVIh6yX4iKXzZW', NULL, '2023-02-15 11:36:48', '2023-02-15 11:36:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `burger`
--
ALTER TABLE `burger`
  ADD PRIMARY KEY (`id`),
  ADD KEY `burger_category_code_foreign` (`category_code`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `drinks`
--
ALTER TABLE `drinks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `drinks_category_code_foreign` (`category_code`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `pasta`
--
ALTER TABLE `pasta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pasta_category_code_foreign` (`category_code`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `pizza`
--
ALTER TABLE `pizza`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pizza_category_code_foreign` (`category_code`);

--
-- Indexes for table `popular`
--
ALTER TABLE `popular`
  ADD PRIMARY KEY (`id`),
  ADD KEY `popular_category_code_foreign` (`category_code`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_code_foreign` (`category_code`);

--
-- Indexes for table `tacos`
--
ALTER TABLE `tacos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tacos_category_code_foreign` (`category_code`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `burger`
--
ALTER TABLE `burger`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `drinks`
--
ALTER TABLE `drinks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `pasta`
--
ALTER TABLE `pasta`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pizza`
--
ALTER TABLE `pizza`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `popular`
--
ALTER TABLE `popular`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `tacos`
--
ALTER TABLE `tacos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `burger`
--
ALTER TABLE `burger`
  ADD CONSTRAINT `burger_category_code_foreign` FOREIGN KEY (`category_code`) REFERENCES `category` (`id`);

--
-- Constraints for table `drinks`
--
ALTER TABLE `drinks`
  ADD CONSTRAINT `drinks_category_code_foreign` FOREIGN KEY (`category_code`) REFERENCES `category` (`id`);

--
-- Constraints for table `pasta`
--
ALTER TABLE `pasta`
  ADD CONSTRAINT `pasta_category_code_foreign` FOREIGN KEY (`category_code`) REFERENCES `category` (`id`);

--
-- Constraints for table `pizza`
--
ALTER TABLE `pizza`
  ADD CONSTRAINT `pizza_category_code_foreign` FOREIGN KEY (`category_code`) REFERENCES `category` (`id`);

--
-- Constraints for table `popular`
--
ALTER TABLE `popular`
  ADD CONSTRAINT `popular_category_code_foreign` FOREIGN KEY (`category_code`) REFERENCES `category` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_code_foreign` FOREIGN KEY (`category_code`) REFERENCES `category` (`id`);

--
-- Constraints for table `tacos`
--
ALTER TABLE `tacos`
  ADD CONSTRAINT `tacos_category_code_foreign` FOREIGN KEY (`category_code`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
