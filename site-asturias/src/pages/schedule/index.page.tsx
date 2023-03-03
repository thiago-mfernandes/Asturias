import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion"
import { Pagination } from "@/components/Pagination";
import Head from "next/head";

export default function Schedule() {
  return (
    <>
      <Head>
        <title>Astúrias | Agenda</title>
      </Head>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <PageHeader />
        <Pagination itemsPerPage={5}/>
      </motion.div>
    </>
  );
}