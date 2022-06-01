<template>
  <!-- Footer -->
  <footer class="text-center text-lg-start bg-light text-muted">
    <!-- Section: Social media -->
    <section
      class="
        d-flex
        justify-content-center justify-content-lg-between
        p-4
        border-bottom
      "
    >
      <!-- Right -->
      <div>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <!-- Right -->
    </section>

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Motala Camping
            </h6>
            Hitta Hit
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1G72u45ScFRHb13Lk2ZvVu-BPkVh_WOM&ehbc=2E312F"
              width="100%"
              height="480"
            ></iframe>
          </div>

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Bokningar</h6>
            <p>Boende: {{ tent.length }}/35</p>
            <p>Restaurang: {{ rest.length }}/12</p>
            <p>Spa: {{ spa.length }}/13</p>
          </div>
          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Sevärdeheter</h6>
            <p>
              <a
                href="https://motormuseum.wixsite.com/motormuseum"
                target="_blank"
                class="text-reset"
                >Motala Motormuseum</a
              >
            </p>
            <p>
              <a href="https://godegard.se/" target="_blank" class="text-reset"
                >Gode Gård</a
              >
            </p>
            <p>
              <a
                href="http://www.motala-industrimuseum.com/"
                target="_blank"
                class="text-reset"
                >Motala Industrimuseum</a
              >
            </p>
            <p>
              <a href="#!" class="text-reset">Charlottenborgs slott</a>
            </p>
          </div>
          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Kontakt</h6>
            <p><i class="fas fa-home me-3"></i> Motala, 59126, SE</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              info@motalacamping.com
            </p>
            <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
  </footer>
  <!-- Footer -->
</template>

<script>
import { tents } from "@/tents.js";
import { restaurant } from "@/restaurant.js";
import { spa } from "@/spa.js";
export default {
  data() {
    return {
      tent: tents.bookedTents,
      rest: restaurant.bookedTables,
      spa: spa.bookedSpa,
    };
  },
};
</script>

<style>
</style>