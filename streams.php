<?php
// streams.php

// Stream links সংরক্ষণের জন্য একটি অ্যারে
$streams = [
    '1' => 'https://pub-e759b284d13741f78f830bd8c02b3145.r2.dev/Bhool%20Bhulaiyaa%203%202024%20Hindi%20HDTC%201080p%20x264%20AAC%20CineVood.mkv',
    '2' => 'https://example.com/stream2.m3u8',
    '3' => 'https://example.com/stream3.m3u8'
];

// `id` প্যারামিটার চেক করে stream লিঙ্ক রিটার্ন করা
$id = $_GET['id'] ?? '';
if (array_key_exists($id, $streams)) {
    echo json_encode(['url' => $streams[$id]]);
} else {
    echo json_encode(['error' => 'Stream not found']);
}
?>
