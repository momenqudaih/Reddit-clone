BEGIN;

INSERT INTO users (username, password, email)
    VALUES
    (
        'admin',
        '$2y$10$gOQkVC6fvxxw/CI0cNWl2OLkP2COPufOCg2g7YRgC.Ogf2cnoju66',
        'admin@admin.com'
    ) ,
    (
        'user', 
        '$2y$10$gOQkVC6fvxxw/CI0cNWl2OLkP2COPufOCg2g7YRgC.Ogf2cnoju66', 
        'user@user.com'
    );

INSERT INTO posts ( content, image, user_id)
    VALUES
    (
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget aliquet nunc nisl eu nunc. Nulla',
        'https://picsum.photos/200/300',
        1
    ),
    (
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget aliquet nunc nisl eu nunc. Nulla',
        'https://picsum.photos/200/300',
        2
    ),
    (
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget aliquet nunc nisl eu nunc. Nulla',
        'https://picsum.photos/200/300',
        1
    ),
    (
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget aliquet nunc nisl eu nunc. Nulla',
        'https://picsum.photos/200/300',
        2
    );

INSERT INTO comments (content, user_id, post_id)
    VALUES
    (
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget aliquet nunc nisl eu nunc. Nulla',
        1,
        1
    ),
    (
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget aliquet nunc nisl eu nunc. Nulla',
        2,
        2
    ),
    (
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget aliquet nunc nisl eu nunc. Nulla',
        1,
        3
    ),
    (
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquet nisl, eget aliquet nunc nisl eu nunc. Nulla',
        2,
        4
    );

COMMIT;
