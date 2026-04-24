<script setup>
import { onMounted, ref } from 'vue';

let Overskrift = ref();
let Nummer = ref();
let Beskrivelse = ref();

async function tilmeldButton(){
  try {
    const Res = await fetch(
        `https://hovedopgave4sem-default-rtdb.europe-west1.firebasedatabase.app/NovaMiniObject.json`
    );
    
    if (!Res.ok) throw new Error("Failed to fetch data");

    const data = await Res.json();
    console.log(data);

    Overskrift.value = data.ProduktTitel;
    Nummer.value = data.ProduktNummer;
    Beskrivelse.value = data.ProduktBeskrivelse;
  } catch (error) {
      console.error(error);
  }
}

onMounted(() => {
    tilmeldButton();
});

</script>

<template>
    {{Overskrift}}
    {{ Nummer }}
    {{ Beskrivelse }}
</template>

<style lang="scss" scoped>
</style>
