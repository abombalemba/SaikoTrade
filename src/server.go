package main

import (
	"fmt"
	"log"
	"net/http"
)

func handler_index(w http.ResponseWriter, r *http.Request) {
	fmt.Println("hello")
}

func main() {
	http.HandleFunc("/", handler_index)

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}