CREATE TABLE task
(
    id          BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
    description VARCHAR(255),
    task_complete BOOLEAN                                 NOT NULL,
    CONSTRAINT pk_task PRIMARY KEY (id)
);