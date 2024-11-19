package main

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestStaticFileServer(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/", nil)
	w := httptest.NewRecorder()

	fs := http.FileServer(http.Dir("./static"))
	handler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fs.ServeHTTP(w, r)
	})

	handler.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Fatalf("Expected status %d, got %d", http.StatusOK, w.Code)
	}

	if w.Body.String() == "" {
		t.Errorf("Expected non-empty response body")
	}
}

func TestIndexHTML(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/index.html", nil)
	w := httptest.NewRecorder()

	fs := http.FileServer(http.Dir("./static"))
	handler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fs.ServeHTTP(w, r)
	})

	handler.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Fatalf("Expected status %d, got %d", http.StatusOK, w.Code)
	}

	if !contains(w.Body.String(), "Hot Beverages Recipes") {
		t.Errorf("Response body does not contain expected content")
	}
}

func contains(s, substr string) bool {
	return len(s) >= len(substr) && s[:len(substr)] == substr
}
