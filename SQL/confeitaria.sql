-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 19-Dez-2020 às 20:16
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 7.3.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `confeitaria`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url_img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `categories`
--

INSERT INTO `categories` (`id`, `name`, `url_img`, `created_at`, `updated_at`) VALUES
(1, 'Cupcake', 'cupcakes.png', '2020-12-18 16:18:20', '2020-12-18 16:18:20'),
(2, 'Bolos', 'cake.png', '2020-12-18 16:55:57', NULL),
(3, 'Salgados', 'pastry.png', '2020-12-18 17:02:00', NULL),
(4, 'Doces', 'sweet.png', '2020-12-18 17:02:00', NULL),
(5, 'Docinhos', 'truffle.png', '2020-12-18 17:09:40', NULL),
(6, 'Sobremessas', 'dessert.png', '2020-12-18 17:09:45', NULL),
(7, 'Sorvetes', 'icecream.png', '2020-12-18 17:09:49', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `failed_jobs`
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
-- Estrutura da tabela `favorites`
--

CREATE TABLE `favorites` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `favorites`
--

INSERT INTO `favorites` (`id`, `user_id`, `product_id`, `created_at`, `updated_at`) VALUES
(4, 1, 3, '2020-12-19 03:56:47', '2020-12-19 03:56:47'),
(5, 1, 2, '2020-12-19 03:57:41', '2020-12-19 03:57:41'),
(8, 2, 1, '2020-12-19 04:16:57', '2020-12-19 04:16:57'),
(9, 2, 2, '2020-12-19 04:17:09', '2020-12-19 04:17:09'),
(10, 2, 3, '2020-12-19 04:17:17', '2020-12-19 04:17:17'),
(12, 2, 5, '2020-12-19 04:17:33', '2020-12-19 04:17:33'),
(13, 2, 6, '2020-12-19 04:17:44', '2020-12-19 04:17:44'),
(14, 1, 1, '2020-12-19 04:20:11', '2020-12-19 04:20:11'),
(16, 1, 4, '2020-12-19 04:28:57', '2020-12-19 04:28:57'),
(18, 2, 13, '2020-12-19 04:56:33', '2020-12-19 04:56:33'),
(19, 1, 11, '2020-12-19 16:29:16', '2020-12-19 16:29:16'),
(20, 1, 12, '2020-12-19 16:29:28', '2020-12-19 16:29:28'),
(21, 1, 9, '2020-12-19 16:30:02', '2020-12-19 16:30:02'),
(22, 1, 13, '2020-12-19 16:30:34', '2020-12-19 16:30:34');

-- --------------------------------------------------------

--
-- Estrutura da tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2020_12_17_211104_create_categories_table', 1),
(5, '2020_12_17_211151_create_products_table', 1),
(6, '2020_12_17_211221_create_favorites_table', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `preco` double(8,2) NOT NULL,
  `url_img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `preco`, `url_img`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'Bolo de Aniversário', 'Lapsum akari migrate asta retum bloqueio margatira kari migrate asta retum bloqueio margatira', 50.00, 'bolo1.png', 2, '2020-12-18 17:10:15', NULL),
(2, 'Bolo de Aniversário2', 'Lapsum akari migrate asta retum bloqueio margatira kari migrate asta retum bloqueio margatira', 50.00, 'bolo1.png', 1, '2020-12-18 17:10:15', NULL),
(3, 'facere non', 'Alice. \'I don\'t know much,\' said Alice, and sighing. \'It IS the same as they came nearer, Alice could think of nothing better to say to this: so she bore it as a partner!\' cried the Mock Turtle, who.', 83.67, 'bolo1.png', 1, '2020-12-19 00:38:12', '2020-12-19 00:38:12'),
(4, 'itaque porro', 'I was a good deal to come out among the bright flower-beds and the roof off.\' After a minute or two, it was good practice to say \'I once tasted--\' but checked herself hastily. \'I don\'t like them.', 39.51, 'bolo1.png', 7, '2020-12-19 00:38:12', '2020-12-19 00:38:12'),
(5, 'expedita ab', 'The next thing was waving its right paw round, \'lives a Hatter: and in despair she put her hand on the English coast you find a thing,\' said the Cat, as soon as there was a general clapping of hands.', 198.27, 'bolo1.png', 5, '2020-12-19 00:38:12', '2020-12-19 00:38:12'),
(6, 'saepe aliquid', 'It did so indeed, and much sooner than she had found the fan she was beginning to feel which way she put it. She felt very lonely and low-spirited. In a little snappishly. \'You\'re enough to drive.', 152.26, 'bolo1.png', 4, '2020-12-19 00:38:12', '2020-12-19 00:38:12'),
(7, 'sed aut', 'They all made of solid glass; there was no use going back to finish his story. CHAPTER IV. The Rabbit started violently, dropped the white kid gloves: she took up the conversation dropped, and the.', 13.11, 'bolo1.png', 5, '2020-12-19 00:38:12', '2020-12-19 00:38:12'),
(8, 'aut iste', 'The Duchess took no notice of her little sister\'s dream. The long grass rustled at her for a rabbit! I suppose I ought to go down the hall. After a while, finding that nothing more happened, she.', 174.67, 'bolo1.png', 3, '2020-12-19 00:38:12', '2020-12-19 00:38:12'),
(9, 'dolorem voluptatibus', 'White Rabbit blew three blasts on the same side of WHAT?\' thought Alice; \'I can\'t go no lower,\' said the Gryphon, and the pattern on their throne when they arrived, with a yelp of delight, which.', 129.23, 'bolo1.png', 7, '2020-12-19 00:38:12', '2020-12-19 00:38:12'),
(10, 'est eum', 'WILL do next! If they had been all the arches are gone from this morning,\' said Alice to herself. \'Shy, they seem to dry me at home! Why, I do hope it\'ll make me grow larger, I can kick a little!\'.', 187.25, 'bolo1.png', 6, '2020-12-19 00:38:12', '2020-12-19 00:38:12'),
(11, 'consectetur unde', 'I want to go! Let me think: was I the same words as before, \'and things are worse than ever,\' thought the poor little thing grunted in reply (it had left off writing on his flappers, \'--Mystery.', 79.69, 'bolo1.png', 1, '2020-12-19 00:38:12', '2020-12-19 00:38:12'),
(12, 'dolores necessitatibus', 'And she thought of herself, \'I wish you were all ornamented with hearts. Next came the guests, mostly Kings and Queens, and among them Alice recognised the White Rabbit read:-- \'They told me you had.', 105.66, 'bolo1.png', 1, '2020-12-19 00:38:12', '2020-12-19 00:38:12'),
(13, 'Bolo de Morango', 'Moran gai potato eureos hugiara anrget alek ojiuria, ashuwaoi. A shu sadaghydaoduhsd', 200.50, 'morango.png', 2, '2020-12-19 01:54:42', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
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
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Alex', 'asd@texte.com', NULL, '$2y$10$q1FfclrPuUsdXMYP2NYY4OqIDqS/XRUx4SI8zURUMYqNC8aKzjP6m', NULL, '2020-12-18 19:17:57', '2020-12-18 19:17:57'),
(2, 'Alex2', 'Asd@tezte.com', NULL, '$2y$10$Gcf9pbYmh7Wo.5BpUfeUYOcOfjWNkLt8pGMUwY2WsrPFw/fARGDSa', NULL, '2020-12-19 04:08:04', '2020-12-19 04:08:04');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_unique` (`name`);

--
-- Índices para tabela `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Índices para tabela `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Índices para tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de tabela `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
