package main

import (
	"io"
	"net/http"
	"strings"
	"testing"
)

const baseUrl = "http://localhost:8081"
const goContainerUrl = "http://go:8081"

func TestHomePageRequest(t *testing.T) {
	resp := doQuickGetRequest(t, "/")
	defer resp.Body.Close()

	validateStatusCode(t, resp.StatusCode, 200)
	validateReadBodyContent(t, resp.Body, "/html or /image")
}

func TestNotFoundRequest(t *testing.T) {
	resp := doQuickGetRequest(t, "/page-not-found")
	defer resp.Body.Close()

	validateStatusCode(t, resp.StatusCode, 404)
}

func TestHtmlNonExistsRequest(t *testing.T) {
	resp := doQuickGetRequest(t, "/html?url=bad-url")
	defer resp.Body.Close()

	validateStatusCode(t, resp.StatusCode, 502)
	validateReadBodyContent(t, resp.Body, "parse \"bad-url\": invalid URI for request")
}

func TestHtmlEmptyRequest(t *testing.T) {
	resp := doQuickGetRequest(t, "/html?url=")
	defer resp.Body.Close()

	validateStatusCode(t, resp.StatusCode, 502)
}

func TestHtmlRequest(t *testing.T) {
	resp := doQuickGetRequest(t, "/html?url="+goContainerUrl)
	defer resp.Body.Close()

	validateReadBodyContent(t, resp.Body, "/html or /image")
}

func doQuickGetRequest(t *testing.T, path string) *http.Response {
	resp, err := http.Get(baseUrl + path)
	if err != nil {
		t.Fatal(err)
	}

	return resp
}

func validateStatusCode(t *testing.T, statusCode, needed int) {
	if statusCode != needed {
		t.Fatalf("Status code is %d, must be %d", statusCode, needed)
	}
}

func validateReadBodyContent(t *testing.T, r io.ReadCloser, needed string) {
	body, err := io.ReadAll(r)
	if err != nil {
		t.Fatal(err)
	}

	if strings.TrimSpace(string(body)) != needed {
		t.Fatalf("Content doesn't match\n- required: \"%v\"\n- accept:   \"%v\"", needed, string(body))
	}
}
